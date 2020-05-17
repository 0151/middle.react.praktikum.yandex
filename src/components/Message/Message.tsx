import React from 'react'
import {cn as createCn} from '@bem-react/classname'

import './Message.css'

export interface MessageProps {
    timestamp: string
    text: string
    author?: string
    isOwn?: boolean
    startsSequence?: boolean
}

export const Message: React.FC<MessageProps> = (props) => {
    const cn = createCn('message')
    
    const {
        text,
        timestamp,
        startsSequence,
        author,
        isOwn
    } = props

    const resultClassName = cn({
        'own': isOwn
    })

    return (

        <div className={resultClassName}>
            <div className="message__balloon">
                {startsSequence && !isOwn && <div className="message__author">{author}</div>}
                <div className="message__content">{text}</div>
                <div className="message__info">
                    <div className="message__date">{timestamp}</div>
                </div>
            </div>
        </div>
    )
}