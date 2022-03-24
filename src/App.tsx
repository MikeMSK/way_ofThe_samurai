import React, {FC} from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Routes, Route} from "react-router-dom";
import {StoreType} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

const App: FC<AppPropsType> = (props) => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile/*"}
                           element={<Profile store={props.store}/>}/>

                    <Route path={"/dialogs/*"}
                           element={<DialogsContainer store={props.store}/>}/>

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


