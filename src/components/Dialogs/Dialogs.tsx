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
        (d: DialogsType) => <DialogItem key={d.id}
                                        id={d.id}
                                        name={d.name}
        />)
    let messagesElements = props.messages.map(
        (m: MessagesType) => <Message key={m.id}
                                      id={m.id}
                                      message={m.message}/>)

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
