import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

import {Message} from '../Message'
import {fetchContacts} from '../../services/api'

import './Chat.css'

interface ChatProps {
    messages: TMessage[]
}

export const Chat: React.FC<ChatProps> = ({messages}) => {

    const renderChat= () => {
        let chat = []
        const contacts: TContactsMap = fetchContacts()

        for (let i = 0; i < messages.length; i++) {
            const previous = messages[i-1]
            const current = messages[i]
            let showTimestamp = true
            let startsSequence = true

            const {
                messageId,
                text,
                timestamp,
                author
            } = current

            if (previous) {
                const past = moment.duration(moment(current.timestamp).diff(previous.timestamp))

                if (past.as('days') < 1) {
                    showTimestamp = false
                }

                if (current.author === previous.author) {
                    startsSequence = false
                }
            }

            const isToday = moment(timestamp).isSame(moment(), 'day')

            if (showTimestamp) {
                const commonTimestamp: string = isToday
                    ? 'Сегодня'
                    : moment(timestamp).format('DD MMMM Y')

                chat.push(
                    <div key={timestamp} className="timestamp">{commonTimestamp}</div>
                )
            }

            //TODO: получить ключ авторизованного пользователя из родительского компонента
            const isOwn = current.author === 'a2d451ac-1c55-49ee-95e4-a1eca43520c7'

            const authorName = isOwn
                ? 'Вы' 
                : contacts[author]

            chat.push(
                <Message
                    key={messageId}
                    text={text}
                    timestamp={moment(timestamp).format('h:mm')}
                    isOwn={isOwn}
                    startsSequence={startsSequence}
                    author={authorName}
                />
            )
        }

        return chat
    }

    return (
        <div className="chat">
            {renderChat()}
        </div>
    )
}