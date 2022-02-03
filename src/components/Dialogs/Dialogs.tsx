import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType, updateNewMessageText} from "../../Redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addMessage: () => void
    updateNewMessageText: (text: string) => void
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

        let addMessage = () => {
            props.addMessage()
        }
        const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewMessageText(e.currentTarget.value)
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}/>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        );
    }
;
