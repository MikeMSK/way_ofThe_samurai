import React, {FC} from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../Redux/dialogs_reducer";

export const DialogItem: FC<DialogsType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
