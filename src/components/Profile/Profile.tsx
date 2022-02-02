import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profile_Info} from "./Profile_Info/Profile_Info";
import {PostType, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText:ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>
        </div>
    );
};

