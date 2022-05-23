import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    //---profile---
                    <Route path={"/profile/*"}
                           element={<Profile/>}/>
                    //---messages---
                    <Route path={"/dialogs/*"}
                           element={<DialogsContainer/>}/>
                    //--users---
                    <Route path={"/users"}
                           element={<UsersContainer/>}/>

                    {/*<Route path={"/music"}*/}
                    {/*       element={<MusicContainer/>}/>*/}
                    {/*<Route path={"/setting"}*/}
                    {/*       element={<SettingContainer/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


// dialogs={props.store.getState().dialogsPage.dialogs}
//               messages={props.store.getState().dialogsPage.messages}
//               newMessageText={props.store.getState().dialogsPage.newMessageText}


