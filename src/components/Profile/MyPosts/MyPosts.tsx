import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state"

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(
        (p: PostType) => <Post key={p.id}
                               id={p.id}
                               message={p.message}
                               likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({
            type: "UPDATE-NEW-POST",
            newText: e.currentTarget.value
        })
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button onClick={addPost}>add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

