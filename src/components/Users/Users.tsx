import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/img/img1_start-foto.jpeg"

class Users extends React.Component {

    componentDidMount() {
        alert("new")
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

     render = () => {
        return <div>
            {this.props.usersPage.map(u => {
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
                                ? <button onClick={() => this.props.unfollow(u.id)}> unFollow </button>
                                : <button onClick={() => this.props.follow(u.id)}> Follow </button>}
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                            <div></div>
                    </span>
                        <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    </div>)
            })}
        </div>
    }

}

export default Users;
