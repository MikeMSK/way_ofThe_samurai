import React, {FC} from 'react';
import {UsersType} from "../../Redux/users_reducer";
import s from "./Users.module.css"
import {v1} from "uuid";

type UsersPropsType = {
    usersPage: UsersType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: FC<UsersPropsType> = (props) => {

    if (props.usersPage.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: true,
                fullName: "Misha",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"},
                photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
            },
            {
                id: v1(),
                followed: false,
                fullName: "Igor",
                status: "I am a teacher",
                location: {city: "Kiev", country: "Ukraine"},
                photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
            },
            {
                id: v1(),
                followed: true,
                fullName: "Sasha",
                status: "I am a dev",
                location: {city: "Vilnus", country: "Litva"},
                photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
            }
        ])
    }
    console.log(props.usersPage)

    return <div>
        {props.usersPage.map(u => {
            return (
                <div key={u.id}
                     className={s.usersStyleComponents}>
                    <span>
                        <div><img className={s.userPhoto}
                                  src={u.photoUrl}
                                  alt="avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>unFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
        })}
    </div>
}
