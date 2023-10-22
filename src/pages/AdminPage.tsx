import React from "react"
import {ChatMessages} from "../components/ChatMessages"
import {Badge, Button} from "react-bootstrap"
import {AdminPanel} from "../components/AdminPanel"

export function AdminPage() {
    return (
        <div className="admin-container d-flex position-relative">
            <AdminPanel />
            <div className="h-100 flex-grow-1 d-flex flex-column chat-messages-admin">
                <div className="w-100 bg-light p-2">
                    <h4 className="m-0">
                        <Button variant="outline-secondary" className="d-lg-none d-inline-block me-2 border-0 rounded-circle"><i className="bi bi-arrow-left fs-4"></i></Button>
                        Номер 203 <Badge bg="primary">Уборка</Badge>
                    </h4>
                </div>
                <ChatMessages />
            </div>
        </div>
    )
}