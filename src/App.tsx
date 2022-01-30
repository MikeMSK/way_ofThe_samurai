import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route, Link} from "react-router-dom";

export type propsAppType = {
    state: any
}

const App: React.FC<propsAppType> = (props) => {

    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile"}
                           element={<Profile state={props.state.profilePage}/>}/>
                    <Route path={"/dialogs"}
                           element={<Dialogs state={props.state.dialogsPage}/>}/>

                    {/*<Route path={"/"} element={<News/>}/>*/}
                    {/*<Route path={"/"} element={<Music/>}/>*/}
                    {/*<Route path={"/"} element={<Setting/>}/>*/}
                </Routes>
            </div>

        </div>
    );
}
export default App;


