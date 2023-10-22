import React, {useEffect, useRef, useState} from "react"
import {Message} from "./Message"
import {SendForm} from "./SendForm"

const initMessages: {text: string, placement: 'start' | 'end'}[] = [
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwefewfewfewf ewfew ewfwe ewfewfwef ew fwefewfewfewf ewfew ewfwe ewfewfwef ew fwefewfewfewf ewfew ewfwe ewfewfwef ew fwefewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fwe',
        placement: 'start'
    },
    {
        text: 'fewfewfewf ewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fweewfew ewfwe ewfewfwef ew fwe',
        placement: 'end'
    },
]

export function ChatMessages () {
    const bottomElement = useRef<HTMLDivElement>(null)
    const messagesElement = useRef<HTMLDivElement>(null)
    const scrollMax = useRef(0)
    const [messages] = useState(initMessages)

    useEffect(() => {
        if (messagesElement.current?.scrollTop === scrollMax.current) {
            bottomElement.current?.scrollIntoView(true)
        }

        if (messagesElement.current) {
            const clientHeight = messagesElement.current.clientHeight
            const scrollHeight = messagesElement.current.scrollHeight
            scrollMax.current = scrollHeight - clientHeight
        }
    })

    return (
        <>
            <div ref={messagesElement} className="h-100 overflow-y-scroll d-flex flex-column p-3 scroll-container">
                <div className="flex-grow-1"></div>
                <div className="d-flex flex-column align-self-center col-12 col-xxl-7">
                    {messages.map((el, i)=><Message key={el.text + i} text={el.text} placement={el.placement} />)}
                </div>
                <div ref={bottomElement} />
            </div>
            <SendForm />
        </>
    )
}