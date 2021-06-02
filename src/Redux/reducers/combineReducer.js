import { combineReducers } from "redux"
import { bankingReducer } from './bankingReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer
})