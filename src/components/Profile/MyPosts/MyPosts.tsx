import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type propsMyPostsType = {
    state: Array<any>
}
export const MyPosts = (props: propsMyPostsType) => {

    let postsElements = props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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

