import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profile_Info} from "./Profile_Info/Profile_Info";
import {ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

