import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {addMessage, DialogsPageType, ProfilePageType} from "./Redux/state";

type AppPropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    addPost: (text: string) => void
    addMessage: (text: string) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile/*"}
                           element={<Profile posts={props.profilePage.posts}
                                             addPost={props.addPost}/>}/>
                    <Route path={"/dialogs/*"}
                           element={<Dialogs dialogs={props.dialogsPage.dialogs}
                                             messages={props.dialogsPage.messages}
                                             addMessage={props.addMessage}/>}/>
                    {/*<Route path={"/"} element={<News/>}/>*/}
                    {/*<Route path={"/"} element={<Music/>}/>*/}
                    {/*<Route path={"/"} element={<Setting/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


