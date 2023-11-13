import {indexApi} from "./index.api";
import {IAuthToken, IProfile} from "../../models/commonModels";


const authEndpoints = indexApi.injectEndpoints({
    endpoints: (build) => ({
        getAuthToken: build.query<IAuthToken, {username: string, password: string}>({
            query: (authData) => ({
                url: 'api-token-auth/',
                method: 'POST',
                body: authData
            })
        }),
        getGuestAuthToken: build.query<IAuthToken, {phone: string, code: string}>({
            query: (authData) => ({
                url: 'api-token-auth-guest/',
                method: 'POST',
                body: authData
            })
        }),
        sendSMS: build.query<any, number>({
            query: (phone)=>({
                url: `send-sms/${phone}`
            })
        }),
        getProfile: build.query<IProfile, void>({
            query: ()=>({
                url: 'profile/'
            })
        })
    })
})

export const {
    useLazyGetAuthTokenQuery,
    useLazyGetGuestAuthTokenQuery,
    useLazySendSMSQuery,
    useGetProfileQuery
} = authEndpoints
