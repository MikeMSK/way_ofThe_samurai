import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../Redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    addMessage: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(
        (d: DialogsType) => <DialogItem name={d.name}
                                        id={d.id}/>)
    let messagesElements = props.messages.map(
        (m: MessagesType) => <Message message={m.message}
                                      id={m.id}/>)

    let sendMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        if (sendMessage.current) {
            props.addMessage(sendMessage.current.value)
            sendMessage.current.value = "";
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={sendMessage}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};
