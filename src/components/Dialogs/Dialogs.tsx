import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    ActionTypes,
    DialogsPageType,
    DialogsType,
    MessagesType,
    addMessageAС,
    updateNewMessageTextAС
} from "../../Redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

        const dialogsElements = props.dialogsPage.dialogs.map(
            (d: DialogsType) => <DialogItem key={d.id}
                                            id={d.id}
                                            name={d.name}/>)
        const messagesElements = props.dialogsPage.messages.map(
            (m: MessagesType) => <Message key={m.id}
                                          id={m.id}
                                          message={m.message}/>)

        const addMessage = () => {
            props.dispatch(addMessageAС(props.dialogsPage.newMessageText))
        }
        const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewMessageTextAС(e.currentTarget.value))
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        );
    }
;
