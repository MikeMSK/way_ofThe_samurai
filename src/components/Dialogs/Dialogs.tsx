import React, {ChangeEvent, FC} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, DialogsType, MessagesType} from "../../Redux/dialogs_reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {

        const dialogsElements = props.dialogsPage.dialogs.map(
            (d: DialogsType) => <DialogItem key={d.id}
                                            id={d.id}
                                            name={d.name}/>)
        const messagesElements = props.dialogsPage.messages.map(
            (m: MessagesType) => <Message key={m.id}
                                          id={m.id}
                                          message={m.message}/>)

        const onAddMessage = () => {
            props.addMessage()
        }
        const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewMessageText(e.currentTarget.value)
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        <textarea placeholder={"Enter your message"}
                                  onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}/>
                    </div>
                    <button onClick={onAddMessage}>
                        send
                    </button>
                </div>
            </div>
        );
    }
;
