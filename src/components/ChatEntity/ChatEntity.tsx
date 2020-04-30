import React from 'react'

import {Props} from './types'
import Avatar from '../UI/Avatar/Avatar'
import classNames from 'classnames';
import moment from 'moment'

import './ChatEntity.css'

const ChatEntity: Props = ({chatId, name, text, date, isCurrent, handleClick}) => {    
    const chatEntityClass = classNames('chat-entity', { 'chat-entity_current': isCurrent })

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

export default ChatEntity