import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageType, PostType} from "../../../Redux/state"

export const MyPosts:React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map(
        (p: PostType) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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

