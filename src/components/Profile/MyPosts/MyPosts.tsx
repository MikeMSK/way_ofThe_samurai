import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType, ProfilePageType, state} from "../../../Redux/state"

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: any
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements = props.posts.map(
        (p: PostType) => <Post id={p.id}
                               message={p.message}
                               likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
            props.updateNewPostText("")
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
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

