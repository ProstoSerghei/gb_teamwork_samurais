import React from "react"
import {Badge, Button, Form, InputGroup} from "react-bootstrap"

export function AdminPanel() {
    return (
        <div className="h-100 bg-light border-end d-flex flex-column admin-panel">
            <div className="p-2 d-flex justify-content-between">
                <Button variant="outline-dark" className="rounded-5 me-2 border-0"><i className="bi bi-list fs-4"></i></Button>
                <InputGroup>
                    <InputGroup.Text className="rounded-5 rounded-end-0 border-end-0 bg-white"><i className="bi bi-search"></i></InputGroup.Text>
                    <Form.Control
                        type="text"
                        className="rounded-5 rounded-start-0 border-start-0"
                        id="chatSearch"
                        name="chatSearch"
                        placeholder="Найти"
                    />
                </InputGroup>
                <Button variant="outline-dark" className="rounded-5 me-2 border-0 d-lg-none ms-2 d-inline-block"><i className="bi bi-arrow-left fs-4"></i></Button>
            </div>

            <div className="m-2 p-3 rounded-2 bg-dark text-white">
                <h5>Номер 203 <Badge bg="primary">Уборка</Badge></h5>
                <p className="text-truncate fw-semibold ">Гость: fewfewfewf ewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew </p>
            </div>

            <div className="m-2 p-3 rounded-2">
                <h5>Номер 301 <Badge bg="primary">Завтрак</Badge></h5>
                <p className="text-truncate fw-semibold text-secondary">Вы: fewfewfewf ewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew </p>
            </div>

            <div className="m-2 p-3 rounded-2 bg-secondary-subtle">
                <h5>Номер 204 <Badge bg="primary">Некомплект</Badge></h5>
                <p className="text-truncate fw-semibold text-secondary">Гость: fewfewfewf ewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew </p>
            </div>
        </div>
    )
}

const AdminPanelChat = () => {
    return (
        <div className="m-2 p-3 rounded-2 bg-secondary-subtle">
            <h4>Номер 204 <Badge bg="primary">Некомплект</Badge></h4>
            <p className="text-truncate fw-semibold text-secondary">Гость: fewfewfewf ewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew </p>
        </div>
    )
}