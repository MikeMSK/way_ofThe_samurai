import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/img1_start-foto.jpeg";
import {UsersType} from "../../Redux/users_reducer";

type UserspropsType = {
    usersPage: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    unfollow: (userID: string) => void
    follow: (userID: string) => void

}

const Users = (props: UserspropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.buttonCurrentNumber}>
                {pages.map((p) => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : ""}
                              onClick={(e) => props.onPageChanged(p)}>
                                 {p}
                    </span>)
                })
                }
            </div>
            {props.usersPage.map((u: any) => {

                return (
                    <div key={u.id}
                         className={s.usersStyleComponents}>
                    <span>
                        <div><img className={s.userPhoto}
                                  src={u.photos.small !== null
                                      ? u.photos.small
                                      : userPhoto}
                                  alt="avatar"/>
                        </div>
                        <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}> unFollow </button>
                            : <button onClick={() => props.follow(u.id)}> Follow </button>}
                        </div>
                    </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </div>)
            })}
        </div>
    );
};

export default Users;
