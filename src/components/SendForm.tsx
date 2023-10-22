import React from "react"
import {Button, Form, InputGroup} from "react-bootstrap"

export function SendForm() {
    return (
        <Form className="p-3 align-self-center col-12 col-xxl-7">
            <InputGroup className="mb-3">
                <Button variant="light" className="border-0 fs-4 rounded-4 rounded-end-0 shadow-lg">
                    <i className="bi bi-paperclip d-block" style={{
                        transform: 'rotate(45deg)',
                        color: 'var(--bs-gray-700)',
                    }}></i>
                </Button>
                <Form.Control
                    className="border-0 bg-light z-3"
                    placeholder="Сообщение"
                    id="sendMessage"
                    name="sendMessage"
                />
                <Button type="submit" variant="light" className="border-0 fs-4 rounded-4 rounded-start-0 shadow-lg">
                    <i className="bi bi-send d-block" style={{
                        transform: 'rotate(45deg)',
                        color: 'var(--bs-gray-700)',
                    }}></i>
                </Button>
            </InputGroup>
        </Form>
    )
}