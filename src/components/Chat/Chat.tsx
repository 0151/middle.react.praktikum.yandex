import React from 'react'

import {IMessage} from '../../types/messenger'
import {Props} from './types'
import Message from '../Message'

import './Chat.css'

const Chat: Props = ({messages}) => {    
    const renderMessage = (message: IMessage) => (
        <Message key={message.messageId} {...message} />
    )

    return (
        <div className="chat">
            {messages.map(renderMessage)}
        </div>
    )    
}

export default Chat