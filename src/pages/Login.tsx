import React, {useState} from "react"
import {Form} from "react-bootstrap"
import {useDispatch} from "react-redux"

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {useLazySendSMSQuery, useLazyGetGuestAuthTokenQuery} from "../store/api/auth.api"
import {setAuthToken} from "../store/profileSlice"
import {Navigate} from "react-router-dom";


export function Login() {
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const dispatch = useDispatch()
    const [sendSMS, {isFetching, data}] = useLazySendSMSQuery()
    const [getToken, lazyGetGuestAuthToken] = useLazyGetGuestAuthTokenQuery()

    const sendSMSHandler = ()=>{
        const intPhone = parseInt(phone)
        if (intPhone && phone.length > 6) {
            sendSMS(intPhone)
        }
    }

    const getTokenHandler = ()=>{
        getToken({
            phone: phone,
            code: code
        }).then(res=>{
            if (res.data) {
                dispatch(setAuthToken(res.data.token))
            }
        })
    }

    return (
        <div className="d-flex justify-content-center p-2">
            <div className="d-flex flex-column align-items-center flex-grow-1 flex-sm-grow-0">
                <div className="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </div>
                {data && 'status' in data && data.status === 'created' ? <>
                        <div className="text-center mb-3">
                            <h3>Введите код, полученный в SMS</h3>
                        </div>
                        <Form.Control
                            className="p-3 mb-3"
                            id="code"
                            name="code"
                            maxLength={4}
                            disabled={lazyGetGuestAuthToken.isFetching}
                            autoFocus
                            value={code}
                            onChange={ev=>setCode(ev.target.value.replace(/[^0-9]/g,''))}
                            onKeyDown={ev=>{
                                if (ev.key === 'Enter') {
                                    getTokenHandler()
                                }
                            }}
                        />
                        <button
                            className="btn btn-dark d-block w-100 p-3 fw-semibold fs-5"
                            disabled={isFetching}
                            onClick={getTokenHandler}
                        >Войти</button>
                    </> :
                <><div className="text-center">
                    <h1>Войти в чат отеля X</h1>
                    <p>Введите номер комнаты и телефон.</p>
                </div>
                <div className=" my-3 w-100">
                    <PhoneInput
                        country='ru'
                        value={phone}
                        onChange={ev=>setPhone(ev)}
                        containerClass="mb-4"
                        inputClass=" d-block w-100 py-4 ps-5"
                        disabled={isFetching}
                        onKeyDown={ev=>{
                            if (ev.key === 'Enter') {
                                sendSMSHandler()
                            }
                        }}
                    />
                    <button
                        className="btn btn-dark d-block w-100 p-3 fw-semibold fs-5"
                        disabled={isFetching}
                        onClick={sendSMSHandler}
                    >Далее</button>
                </div></>}
            </div>
        </div>
    )
}
