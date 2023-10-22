import React from "react"

export function Message ({text, placement}: {text: string, placement: 'start' | 'end'}) {
    return (
        <div className={`align-self-${placement} message p-3 bg-light rounded-5 mb-3`}>
            {text}
        </div>
    )
}