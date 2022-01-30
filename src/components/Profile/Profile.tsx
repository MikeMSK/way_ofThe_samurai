import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profile_Info} from "./Profile_Info/Profile_Info";
import {ProfilePageType} from "../../Redux/state";

export const Profile: React.FC<ProfilePageType> = (props) => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

