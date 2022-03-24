import React, {FC} from 'react';
import s from "./Profile.module.css"
import {Profile_Info} from "./Profile_Info/Profile_Info";
import {StoreType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <Profile_Info/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

