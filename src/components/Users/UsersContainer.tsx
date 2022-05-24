import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setToggleIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersType
} from "../../Redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

export type MapStateToPropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    render = () => {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersPage={this.props.usersPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>

    }
}

//данные из state
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}
//callback
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        unfollow: (userID: string) => dispatch(unFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalCount: (totalCount: number) => dispatch(setUsersTotalCountAC(totalCount)),
        setToggleIsFetching: (isFetching: boolean) => dispatch(setToggleIsFetchingAC(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)