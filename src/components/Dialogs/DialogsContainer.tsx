import React from 'react';
import {
    ActionTypesMessage, addMessageActionCreator,
    DialogsPageType, updateNewMessageTextActionCreator
} from "../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (text: string) => void
}
//данные из state
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//callback
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (text: string) => dispatch(updateNewMessageTextActionCreator(text))
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer


// type DialogsPropsType = {
//     store: StoreType
// }FC<DialogsPropsType>
// export const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             const state = store.getState()
//             const addMessage = () => {
//                 const action = addMessageActionСreator(state.dialogsPage.newMessageText)
//                 store.dispatch(action)
//             }
//             const onMessageChange = (text: string) => {
//                 const action = updateNewMessageTextActionСreator(text)
//                 store.dispatch(action)
//             }
//
//             return <Dialogs dialogsPage={state.dialogsPage}
//                             addMessage={addMessage}
//                             updateNewPostText={onMessageChange}/>
//         }
//         }
//     </StoreContext.Consumer>
// };
