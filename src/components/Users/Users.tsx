import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import * as axios from "axios";
import userPhoto from "../../assets/img/img1_start-foto.jpeg"

class Users extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={s.buttonCurrentNumber}>
                {pages.map((p) => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => this.onPageChanged(p)}>
                                 {p}
                    </span>
                })
                }
            </div>
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
