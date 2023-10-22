import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const indexApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/'
    }),
    endpoints: build => ({
        getAuthToken: build.mutation<any, void>({
            query: () => ''
        })
    })
})

export const {
    useGetAuthTokenMutation
} = indexApi
