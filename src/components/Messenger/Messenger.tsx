import React, { PureComponent } from 'react'

import {IChat, IMessage} from '../../types/messenger'
import {State} from './types'
import List from '../List/List'
import Chat from '../Chat/Chat'

import './Messenger.css'
import {chats} from './fakeData'

class Messenger extends PureComponent {    
    state: State = {
        messages: [],
        chats: [],
        current: null
    }

    fetchChats() {
        const compareDate = (a: IChat, b: IChat): number => {
            if (a.date < b.date) return 1
            if (a.date > b.date) return -1
            return 0
        }

        return chats.sort(compareDate)
    }

    fetchMessages(chatId: number): IMessage[] {
        const chat = chats.filter(chat => chat.chatId === chatId)
        const messages = (chat[0].messages) ?? []

        return messages
    }

    selectChat = (chatId: number) => {
        return () => {
            const messages = this.fetchMessages(chatId)

            this.setState({
                messages,
                current: chatId
            })    
        }
    }

    componentDidMount() {
        this.setState({
            chats: this.fetchChats()
        })
    }

    render() {
        return (
            <div className="messenger">
                <div className="messenger__sidebar">
                    <List chats={this.state.chats} current={this.state.current} handleClick={this.selectChat} />
                </div>
                <div className="messenger__main">
                    <Chat messages={this.state.messages} />
                </div>
            </div>
        )    
    }
}

export default Messenger