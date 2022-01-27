import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type propsDialogItemType = {
    name: string
    id: number
}
const DialogItem = (props: propsDialogItemType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type propsMessageType = {
    message: string
}
const Message = (props: propsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogItem name={"Misha"} id={1}/>
                <DialogItem name={"Igor"} id={2}/>
                <DialogItem name={"Sasha"} id={3}/>
                <DialogItem name={"Artur"} id={4}/>
                <DialogItem name={"Artyom"} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi!"}/>
                <Message message={"How are you?"}/>
                <Message message={"Fine, thanks!"}/>
            </div>
        </div>
    );
};
