import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {ActionTypes, StoreType} from "./Redux/state";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile/*"}
                           element={<Profile profilePage={props.store.getState().profilePage}
                                             dispatch={props.dispatch}/>}/>
                    <Route path={"/dialogs/*"}
                           element={<Dialogs dialogsPage={props.store.getState().dialogsPage}
                                             dispatch={props.dispatch}/>}/>

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


