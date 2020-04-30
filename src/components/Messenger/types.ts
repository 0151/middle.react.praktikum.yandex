import {IChat, IMessage} from '../../types/messenger'

interface MessengerState {
    messages: IMessage[]
    chats: IChat[]
    current: number | null
}

export type State = MessengerState

