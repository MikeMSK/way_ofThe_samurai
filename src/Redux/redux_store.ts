import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";


export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})


export const store = createStore(rootReducer)



