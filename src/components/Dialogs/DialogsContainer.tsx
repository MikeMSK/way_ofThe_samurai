import React, {FC} from 'react';
import {StoreType,} from "../../Redux/store";
import {addMessageActionСreator, updateNewMessageTextActionСreator} from "../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext"

// type DialogsPropsType = {
//     store: StoreType
// }FC<DialogsPropsType>

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            const state = store.getState()
            const addMessage = () => {
                const action = addMessageActionСreator(state.dialogsPage.newMessageText)
                store.dispatch(action)
            }
            const onMessageChange = (text: string) => {
                const action = updateNewMessageTextActionСreator(text)
                store.dispatch(action)
            }

            return <Dialogs dialogsPage={state.dialogsPage}
                            addMessage={addMessage}
                            updateNewPostText={onMessageChange}/>
        }
        }
    </StoreContext.Consumer>
};
