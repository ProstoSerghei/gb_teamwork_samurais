import {configureStore} from "@reduxjs/toolkit"
import {indexApi} from "./api/index.api"
import {setupListeners} from "@reduxjs/toolkit/query"


export const store = configureStore({
    reducer: {
        [indexApi.reducerPath]: indexApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(indexApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>