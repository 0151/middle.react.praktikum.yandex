import React from 'react'

import {TSelectChatHandler} from '../Messenger/types'
import {ChatEntity} from '../ChatEntity'

import './List.css'

interface Props {
    chats: TChat[]
    current: TChatId | null
    handleClick: TSelectChatHandler
}

export const List: React.FC<Props> = ({chats, current, handleClick}) => (
    <ul className="list">
        {chats.map((chat: TChat) => (
            <ChatEntity key={chat.chatId} {...chat} isCurrent={chat.chatId === current } handleClick={handleClick} />
        ))}
    </ul>
)