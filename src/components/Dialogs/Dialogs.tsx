import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";


type propsDialogType = {
    dialogData: any
    messagesData: any
    postData: any

}

export const Dialogs = (props: propsDialogType) => {

    //BLL(business logic layer)


    // let dialogsElements = props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)

    return (
        //UI (user interface)
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {/*{dialogsElements}*/}
            </div>
            <div className={s.messages}>
                {/*{messagesElements}*/}
            </div>
        </div>
    );
};
