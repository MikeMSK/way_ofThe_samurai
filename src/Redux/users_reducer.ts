import {v1} from "uuid";
//----------------TYPE--------------

export type LocationType = {
    city: string,
    country: string
}
export type UsersType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
    photoUrl: string
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
    users: [
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: "Misha",
        //     status: "I am a boss",
        //     location: {city: "Minsk", country: "Belarus"},
        //     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: "Igor",
        //     status: "I am a teacher",
        //     location: {city: "Kiev", country: "Ukraine"},
        //     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
        // },
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: "Sasha",
        //     status: "I am a dev",
        //     location: {city: "Vilnus", country: "Litva"},
        //     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
        // }
        ]
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

// {
//     id: v1(),
//     followed: true,
//     fullName: "Misha",
//     status: "I am a boss",
//     location: {city: "Minsk", country: "Belarus"},
//     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
// },
// {
//     id: v1(),
//     followed: false,
//     fullName: "Igor",
//     status: "I am a teacher",
//     location: {city: "Kiev", country: "Ukraine"},
//     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
// },
// {
//     id: v1(),
//     followed: true,
//     fullName: "Sasha",
//     status: "I am a dev",
//     location: {city: "Vilnus", country: "Litva"},
//     photoUrl: "https://cdn.costumewall.com/wp-content/uploads/2018/10/mr-clean.jpg"
// }