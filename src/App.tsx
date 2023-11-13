import React, {useEffect} from 'react'

import {Navigate, Route, Routes} from "react-router-dom"

import {Login} from "./pages/Login"
import {Chat} from "./pages/Chat"
import {AdminLogin} from "./pages/AdminLogin"
import {AdminPage} from "./pages/AdminPage"
import {useSelector} from "react-redux"
import {RootState} from "./store"
import {useGetProfileQuery} from "./store/api/auth.api"
import {Spinner} from "react-bootstrap"

function App() {
    const token = useSelector((state: RootState)=>state.profile.token)
    const {data, isFetching, isError, refetch} = useGetProfileQuery()

    useEffect(() => {
        if (token !== '') {
            refetch()
        }
    }, [token, refetch])
    return (<>
        {isFetching &&  <Spinner className="d-block mx-auto mt-5" style={{width: '64px', height: '64px'}} />}
        {data && token !== '' && <Routes>
            <Route path="/" element={data.is_guest ? <Chat/> : <Navigate to="/admin" replace/>}/>

            <Route path="/admin" element={!data.is_guest ? <AdminPage/> : <Navigate to="/" replace/>}/>

            <Route path="*" element={data.is_guest ? <Navigate to="/" replace/> : <Navigate to="/admin" replace/>}/>
        </Routes>}
        {(isError || token === '') && <Routes>
            <Route path="/login" element={<Login/>}/>

            <Route path="/admin/login" element={<AdminLogin/>}/>

            <Route path="/admin" element={<Navigate to="/admin/login" replace/>}/>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>}
    </>)
}

export default App
