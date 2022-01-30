import React from 'react';
import s from "./Post.module.css"
import {PostType} from "../../../../Redux/state";

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.blexar.com/avatar.png" alt="img"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

