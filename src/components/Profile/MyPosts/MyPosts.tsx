import React, {ChangeEvent, FC} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../Redux/profile_reducer";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}
//_______presentation component____________
export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const postsElements = props.profilePage.posts.map(
        (p: PostType) => <Post key={p.id}
                               id={p.id}
                               message={p.message}
                               likesCount={p.likesCount}/>)

    const onAddPost = () => {
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
                    <textarea placeholder={"Enter your post"}
                              onChange={onPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <button onClick={onAddPost}>
                    add
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

