import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profile_Info} from "./Profile_Info/Profile_Info";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPosts/>
        </div>
    );
};

