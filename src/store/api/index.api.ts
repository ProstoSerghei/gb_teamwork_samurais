import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {RootState} from "../index";


export const indexApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).profile.token
            if (token) {
                headers.set('Authorization', `Token ${token}`)
            }
            return headers
        },
    }),
    endpoints: build => ({

    })
})

export const {

} = indexApi
