import React from 'react'

import {Props} from './types'
import moment from 'moment'

import './Message.css'

const Message: Props = ({text, date}) => {
    return (
        <div className="message">
            <div className="message__balloon">
                <div className="message__content">{text}</div>
                <div className="message__info">
                    <div className="message__date">{moment(date).format("DD:MM:YYYY hh:mm")}</div>
                </div>
            </div>
        </div>
    )
}

export default Message