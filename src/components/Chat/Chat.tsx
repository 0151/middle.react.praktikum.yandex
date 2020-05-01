import React from 'react'

import {Message} from '../Message'

import './Chat.css'

interface Props {
    messages: TMessage[]
}

export const Chat: React.FC<Props> = ({messages}) => (
    <div className="chat">
        {messages.map(message => <Message key={message.messageId} {...message} />)}
    </div>
)