import React, {FC} from 'react';
import {StoreType,} from "../../Redux/store";
import {addMessageActionСreator, updateNewMessageTextActionСreator} from "../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: FC<DialogsPropsType> = (props) => {

        const state = props.store.getState()

        const addMessage = () => {
            props.store.dispatch(addMessageActionСreator(state.dialogsPage.newMessageText))
        }
        const onMessageChange = (text: string) => {
            props.store.dispatch(updateNewMessageTextActionСreator(text))
        }

        return <Dialogs dialogsPage={state.dialogsPage}
                        addMessage={addMessage}
                        updateNewPostText={onMessageChange}/>
    }
;
