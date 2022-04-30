import React from 'react';
import {
    DialogsPageType,
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessage: () => void,
    updateNewMessageText: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
//данные из state
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//callback
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
