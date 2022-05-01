import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/users_reducer";

type MapStateToPropsType = {
    usersPage: UsersType[]
}
type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
//данные из state
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.userPage.users
    }
}
//callback
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        unfollow: (userID: string) => dispatch(unFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)