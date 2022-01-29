import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route, Link} from "react-router-dom";

type propsObjectDialogDataType = {
    id: number,
    name: string
}
type propsObjectMessagesDataType = {
    id: number,
    message: string
}
type propsObjectPostDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type propsAppType = {
    dialogData: Array<propsObjectDialogDataType>
    messagesData: Array<propsObjectMessagesDataType>
    postData: Array<propsObjectPostDataType>
}

const App = (props: propsAppType) => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/dialogs"} element={<Dialogs dialogData={props.dialogData}
                                                               messagesData={props.messagesData}
                                                               postData={props.postData}/>}/>
                    {/*<Route path={"/"} element={<News/>}/>*/}
                    {/*<Route path={"/"} element={<Music/>}/>*/}
                    {/*<Route path={"/"} element={<Setting/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


