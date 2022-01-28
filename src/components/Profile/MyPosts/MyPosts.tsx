import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 1, message: "I`am fine, thanks you", likesCount: 10},
        {id: 1, message: "It`s cool", likesCount: 15},
        {id: 1, message: "Yes", likesCount: 20},
        {id: 1, message: "Fack you", likesCount: 25}
    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    );
};

