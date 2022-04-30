import React, {FC} from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/img/img1_start-foto.jpeg"


export const Users: FC<UsersPropsType> = (props) => {

    let getUsers = () => {
        if (props.usersPage.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return <div>
        <button onClick={getUsers}> Get Users</button>
        {props.usersPage.map(u => {
            console.log(u)
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
}
