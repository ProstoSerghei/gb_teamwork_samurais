import React, {useState} from "react"
import {FloatingLabel, Form} from "react-bootstrap"
import {useLazyGetAuthTokenQuery} from "../store/api/auth.api"
import {useDispatch} from "react-redux";
import {setAuthToken} from "../store/profileSlice";

export function AdminLogin() {
    const [authData, setAuthData] = useState<{username: string, password: string}>({
        username: '',
        password: ''
    })
    const dispatch = useDispatch()
    const [getAuthToken, {isFetching, data}] = useLazyGetAuthTokenQuery()

    return (
        <div className="d-flex justify-content-center p-2">
            <div className="d-flex flex-column align-items-center flex-grow-1 flex-sm-grow-0">
                <div className="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                </div>
                <div className="text-center">
                    <h1>Войти в чат отеля X</h1>
                    <p>Введите имя пользователя и пароль.</p>
                </div>
                <div className=" my-3 w-100">
                    <FloatingLabel
                        controlId="roomNumber"
                        label="Имя пользователя"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder=""
                            value={authData.username}
                            onChange={ev=>setAuthData(p=>({...p, username: ev.target.value}))}
                            disabled={isFetching}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="phoneNumber"
                        label="Пароль"
                        className="mb-4"
                    >
                        <Form.Control type="password" placeholder=""
                            value={authData.password}
                            onChange={ev=>setAuthData(p=>({...p, password: ev.target.value}))}
                            disabled={isFetching}
                        />
                    </FloatingLabel>
                    <button className="btn btn-dark d-block w-100 p-3 fw-semibold fs-5"
                        onClick={()=>{
                            getAuthToken(authData).then(res=>{
                                if (res.data) {
                                    dispatch(setAuthToken(res.data.token))
                                }
                            })
                        }}
                        disabled={isFetching}
                    >Войти</button>
                </div>
            </div>
        </div>
    )
}