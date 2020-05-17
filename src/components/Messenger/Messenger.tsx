import React, {PureComponent} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { v1 as uuidv1 } from 'uuid'
import moment from 'moment'

import {List} from '../List'
import {Chat} from '../Chat'
import './Messenger.css'
import {fetchChats, fetchMesssages} from '../../services/api'
import {Compose} from '../Compose'

interface MessengerState {
    messages: TMessage[]
    chats: TChat[]
    selected: TUUID | undefined
}

interface MessengerProps {
    userId?: TUUID
}

interface QueryParams {
    chatId?: string | undefined
}

export class Messenger extends PureComponent<MessengerProps & RouteComponentProps<QueryParams>, MessengerState> {
    state = {
        messages: [],
        chats: [],
        selected: this.props.match.params.chatId,
    }

    handlePushMessage = (message: string) => {
        this.setState(prevState => {
            return {
                messages: [
                    ...prevState.messages,
                    {
                        messageId: uuidv1(),
                        text: message,
                        timestamp: moment().format(),
                        author: "a2d451ac-1c55-49ee-95e4-a1eca43520c7"
                    }
                ]
            }
        })
    }

    handleChatSelect = (chatId: TUUID) => {
        return () => {
            this.setState({
                messages: fetchMesssages(chatId),
                selected: chatId
            })    

            this.props.history.push(`/chat/${chatId}`)
        }
    }

    componentDidMount() {
        this.setState({
            chats: fetchChats(),

            //В браузере эту часть сложно увидеть, потому что приложение пока не хранит данные об авторизации
            messages: this.state.selected ? fetchMesssages(this.state.selected) : []
        })
    }

    render() {
        return (
            <div className="layout">
                <div className="sidebar">
                    <List chats={this.state.chats} selected={this.state.selected} handleChatSelect={this.handleChatSelect}  />
                </div>
                <div className="main">
                    {this.state.selected &&
                        <>
                        <Chat messages={this.state.messages} />
                        <Compose handlePushMessage={this.handlePushMessage} />    
                        </>
                    }
                </div>
            </div>
        )    
    }
}