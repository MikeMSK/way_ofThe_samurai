//----------------TYPE--------------

export type LocationType = {
    city: string,
    country: string
}
type photosType = {
    large: any
    small: any
}
export type UsersType = {
    name: string
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
    photoUrl: string
    photos: photosType
}
export type UsersPageType = {
    users: UsersType[]
}
export type ActionTypesUsers =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

//----------------ActionCreator-----------

export const followAC = (userID: string) => ({
    type: "FOLLOW",
    userID
}) as const
export const unFollowAC = (userID: string) => ({
    type: "UNFOLLOW",
    userID
}) as const
export const setUsersAC = (users: UsersType[]) => ({
    type: "SET_USERS",
    users
}) as const

//------------------initialState-----------
const initialState: UsersPageType = {
    users: []
}
//-------------------dialogsReducer---------------------
const usersReducer = (state: UsersPageType = initialState,
                      action: ActionTypesUsers): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                }))
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                }))
            };
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
            // {...state, users: [...state.users, ...action.users]}!!!!
        }
        default:
            return {...state}
    }
}
export default usersReducer
