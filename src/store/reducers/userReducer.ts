import { UserAction, UserActionTypes, UserState } from "../../types/todo"


const initalState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initalState, action: UserAction): UserState => {
    switch(action.type) {
        //подгрузка с сервера
        case UserActionTypes.FETCH_USERS : 
            return {
                users: [],
                loading: true,
                error: null
            }
        case UserActionTypes.FETCH_USERS_SUCCESS : 
            return {
                users: action.payload,
                loading: false,
                error: null
            }
        case UserActionTypes.FETCH_USERS_ERROR : 
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state 
    }
}