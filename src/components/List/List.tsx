import React from 'react'

import {IChat} from '../../types/messanger'
import {Props} from './types'
import ChatEntity from '../ChatEntity'

import './List.css'

const List: Props = ({chats, current, handleClick}) => {
    const renderChatEntity = (chat: IChat) => (
        <ChatEntity key={chat.chatId} {...chat} isCurrent={chat.chatId === current } handleClick={handleClick} />
    )
    
    return (
        <ul className="list">
            {chats.map(renderChatEntity)}
        </ul>
    )    
}

export default List