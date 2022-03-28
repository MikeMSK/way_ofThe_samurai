import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UsersType} from "../../Redux/users_reducer";

type mapStateToPropsType = {
    usersPage: UsersType[]
}
type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}
//данные из state
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.userPage.users
    }
}
//callback
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => dispatch(followAC(userID)),
        unfollow: (userID: string) => dispatch(unFollowAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)