import React from 'react'
import {cn as createCn} from '@bem-react/classname'
import moment from 'moment'

import './ChatEntity.css'
import {Avatar} from '../Avatar'

interface ChatEntityProps {
    chatId: TUUID

    // Дата последнего сообщения
    timestamp: string
    
    //Заголовок чата
    name: string

    //Последнее сообщение или описание
    text?: string

    isSelected: boolean

    //Обработчик нажатия на плашку чата
    handleChatSelect: (chatId: TUUID) => () => void
}

export const ChatEntity: React.FC<ChatEntityProps> = (props) => {
    const cn = createCn('chat-entity')

    const {
        chatId,
        timestamp,
        name,
        text,
        isSelected,
        handleChatSelect
    } = props

    const dateFormatted = moment(timestamp).format('DD.MM.YYYY')

    const resultclassName = cn({
        'selected': isSelected
    })

    return (
        <li className={resultclassName} onClick={handleChatSelect(chatId)}>
            <div className="chat-entity__prepend">
                <Avatar />
            </div>
            <div className="chat-entity__body">
                <div className="chat-entity__horizontal-layout">
                    <div className="chat-entity__header">{name}</div>
                    <div className="chat-entity__date">{dateFormatted}</div>
                </div>
                { text && <div className="chat-entity__text">{text}</div> }
            </div>
        </li>
    )
}