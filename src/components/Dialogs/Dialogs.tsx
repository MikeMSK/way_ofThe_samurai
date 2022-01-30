import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type propsObjectDialogsType = {
    id: number,
    name: string
}
type propsObjectMessagesType = {
    id: number,
    message: string
}

type propsDialogType = {
    state: any
}

export const Dialogs = (props: propsDialogType) => {

    let dialogsElements = props.state.dialogs.map(
        (d: propsObjectDialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(
        (m: propsObjectMessagesType) => <Message message={m.message}/>)

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
