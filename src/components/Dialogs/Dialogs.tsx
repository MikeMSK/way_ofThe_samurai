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

    //BLL(business logic layer)
    let dialogData = [
        {id: 1, name: "Misha"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Artur"},
        {id: 5, name: "Artyom"},
    ]
    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Fine, thanks!"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Bye!"},
    ]

    let dialogsElements = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map(m => <Message message={m.message}/>)

    return (
        //UI (user interface)
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
