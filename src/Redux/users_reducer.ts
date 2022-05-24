//----------------TYPE--------------
export type LocationType = {
    city: string,
    country: string
}
export type photosType = {
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type ActionTypesUsers =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setToggleIsFetchingAC>

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
export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET_CURRENT_PAGE",
    currentPage
}) as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: "SET_TOTAL_COUNT",
    totalCount: totalUsersCount
}) as const
export const setToggleIsFetchingAC = (isFetching: boolean) => ({
    type: "TOGGLE IS FETCHING",
    isFetching
}) as const

//------------------initialState-----------
const initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
            // {...state, users: [...state.users, ...action.users]}!!!!
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE IS FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return {...state}
    }
}
export default usersReducer
