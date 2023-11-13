import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IAuthToken} from "../models/commonModels"
import Cookies from "universal-cookie"


const cookies = new Cookies()
const token = cookies.get('auth_token')
const initState: IAuthToken = {
    token: token && token !== 'undefined' ? token : ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<string>)=>{
            const cookies = new Cookies()
            cookies.set('auth_token', action.payload)
            return {...state, token: action.payload}
        },
        logOut: (state) => {
            const cookies = new Cookies()
            cookies.set('auth_token', '')
            return {...state, token: ''}
        }
    }
})

export const {setAuthToken} = profileSlice.actions

export default profileSlice.reducer
