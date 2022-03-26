import React from 'react';
import s from "./Profile.module.css"
import {Profile_Info} from "./Profile_Info/Profile_Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPostsContainer/>
        </div>
    );
};

