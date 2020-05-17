import React from 'react'

import {ChatEntity} from '../ChatEntity'
import './List.css'

interface ListProps {
    chats: TChat[]
    
    //Ключ выбранного чата
    selected: TUUID | undefined

    //Обработчик нажатия на плашку чата
    handleChatSelect: (chatId: TUUID) => () => void
}

export const List: React.FC<ListProps> = (props) => {
    const {
        chats,
        selected,
        handleChatSelect,
    } = props

    return (
        <ul className="list">
            {chats.map(({chatId, ...other}) => (
                <ChatEntity
                    key={chatId}
                    chatId={chatId}
                    isSelected={chatId === selected}
                    handleChatSelect={handleChatSelect}
                    {...other}
                />
            ))}
        </ul>
    )
}
