import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageType, PostType, state} from "../../../Redux/state"

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (x: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts.map(
        (p: PostType) => <Post id={p.id}
                               message={p.message}
                               likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = "";
        }
    }
    const onPostChange = () => {

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={state.profilePage.newPostText}/>
                </div>
                <button onClick={addPost}>add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

