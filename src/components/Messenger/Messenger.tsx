import React, {PureComponent} from 'react'

import {TSelectChatHandler} from './types'
import {List} from '../List/List'
import {Chat} from '../Chat/Chat'
import {chats, messages} from './fakeData'

import './Messenger.css'

interface State {
    messages: TMessage[]
    chats: TChat[]
    current: TChatId | null
}

const fetchChats = () => {
    const compareDate = (a: TChat, b: TChat): number => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
    }

    return chats.sort(compareDate)
}

const fetchMessages = (chatId: TChatId) => messages.filter(message => message.chatId === chatId)


export class Messenger extends PureComponent<{}, State> {    
    state: State = {
        messages: [],
        chats: [],
        current: null
    }

    selectChat: TSelectChatHandler = (chatId: TChatId) => {
        return () => {
            const messages:TMessage[] = fetchMessages(chatId)

            this.setState({
                messages,
                current: chatId
            })    
        }
    }

    componentDidMount() {
        this.setState({
            chats: fetchChats()
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