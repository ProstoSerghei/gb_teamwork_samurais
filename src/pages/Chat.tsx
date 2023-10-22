import React from "react";
import {ChatMessages} from "../components/ChatMessages"

export function Chat () {
    return (
        <div className="row vw-100 flex-column align-items-center m-0 bg-light">
            <div className="col-lg-9 col-12 p-0 d-flex flex-column chat-col border-start border-end chat-messages">
                <Header />
                <ChatMessages />
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="bg-light chat-nav p-2 shadow-sm z-3">
            <h3>The Best Hotel</h3>
        </div>
    )
}