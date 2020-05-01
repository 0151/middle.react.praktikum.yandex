import React from 'react'

import {TSelectChatHandler} from '../Messenger/types'
import cn from 'classnames';
import moment from 'moment'
import {Avatar} from '../Avatar'

import './ChatEntity.css'

interface Props extends TChat {
    isCurrent: boolean
    handleClick: TSelectChatHandler
}

export const ChatEntity: React.FC<Props> = ({chatId, name, text, date, isCurrent, handleClick}) => {    
    const chatEntityClass = cn('chat-entity', { 'chat-entity_current': isCurrent })

    return (
        <li className={chatEntityClass} onClick={handleClick(chatId)}>
            <div className="chat-entity__prepend">
                <Avatar />
            </div>
            <div className="chat-entity__body">
                <div className="chat-entity__horizontal-layout">
                    <div className="chat-entity__header">{name}</div>
                    <div className="chat-entity__date">{moment(date).format('DD.MM.YYYY')}</div>
                </div>
                { text && <div className="chat-entity__text">{text}</div> }
            </div>
        </li>
    )
}