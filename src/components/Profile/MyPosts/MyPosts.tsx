import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../Redux/state"

type MyPostsPropsType = {
    posts: ProfilePageType
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.posts.map(
        (p: PostType) => <Post key={p.id}
                               id={p.id}
                               message={p.message}
                               likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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

