import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, DialogsType, MessagesType} from "../../Redux/state";

export const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map(
        (d: DialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(
        (m: MessagesType) => <Message message={m.message} id={m.id}/>)

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
