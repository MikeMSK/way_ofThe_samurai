import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {DialogsPageType, ProfilePageType, updateNewMessageText} from "./Redux/state";

type AppPropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (text: string) => void
    updateNewMessageText:(text:string)=>void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile/*"}
                           element={<Profile posts={props.profilePage}
                                             newPostText={props.profilePage.newPostText}
                                             addPost={props.addPost}
                                             updateNewPostText={props.updateNewPostText}/>}
                    />
                    <Route path={"/dialogs/*"}
                           element={<Dialogs dialogs={props.dialogsPage.dialogs}
                                             messages={props.dialogsPage.messages}
                                             newMessageText={props.dialogsPage.newMessageText}
                                             addMessage={props.addMessage}
                                             updateNewMessageText={props.updateNewMessageText}
                           />}/>

                    {/*<Route path={"/"} element={<News/>}/>*/}
                    {/*<Route path={"/"} element={<Music/>}/>*/}
                    {/*<Route path={"/"} element={<Setting/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


