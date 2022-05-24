import React from 'react';
import s from "./Preloader.module.css"
import loader1 from "./../../../assets/img/loader1.gif"

const Preloader = (props: any) => {

    return (
        <>
            <img className={s.styleLoader}
                 src={loader1}/>
        </>
    )
}
export default Preloader;
