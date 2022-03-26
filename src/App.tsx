import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile/*"}
                           element={<Profile/>}/>

                    <Route path={"/dialogs/*"}
                           element={<DialogsContainer/>}/>

                    {/*<Route path={"/"} element={<News/>}/>*/}
                    {/*<Route path={"/"} element={<Music/>}/>*/}
                    {/*<Route path={"/"} element={<Setting/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


// dialogs={props.store.getState().dialogsPage.dialogs}
//               messages={props.store.getState().dialogsPage.messages}
//               newMessageText={props.store.getState().dialogsPage.newMessageText}


