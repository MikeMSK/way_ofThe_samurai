import React, {FC} from 'react';
import {StoreType,} from "../../../Redux/store"
import {addPostActionСreator, updateNewPostTextActionСreator} from "../../../Redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type MyPostsPropsType = {
//     store: StoreType
// }: FC<MyPostsPropsType>


//____________container component_______
export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState()
            const addPost = () => {
                const action = addPostActionСreator(state.profilePage.newPostText)
                store.dispatch(action)
            }
            const onPostChange = (text: string) => {
                const action = updateNewPostTextActionСreator(text)
                store.dispatch(action)
            }

            return <MyPosts posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}/>
        }
        }
    </StoreContext.Consumer>
};

