import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>add</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"} likesCount={5}/>
                <Post message={"I`am fine, thanks you"} likesCount={10}/>
            </div>
        </div>
    );
};

