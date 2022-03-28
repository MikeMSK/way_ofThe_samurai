import React from 'react';
import {
    addPostActionCreator, updateNewPostTextActionCreator,
    ProfilePageType
} from "../../../Redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux_store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: ProfilePageType
}
type mapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
    }
}
//____________container component_______
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer


// type MyPostsPropsType = {
//     store: StoreType
// }: FC<MyPostsPropsType>
// export const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             const state = store.getState()
//             const addPost = () => {
//                 const action = addPostActionСreator(state.profilePage.newPostText)
//                 store.dispatch(action)
//             }
//             const onPostChange = (text: string) => {
//                 const action = updateNewPostTextActionСreator(text)
//                 store.dispatch(action)
//             }
//
//             return <MyPosts posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                             addPost={addPost}
//                             updateNewPostText={onPostChange}/>
//         }
//         }
//     </StoreContext.Consumer>
// }
// ;