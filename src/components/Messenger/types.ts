import {IChat, IMessage} from '../../types/messanger'

interface MessengerState {
    messages: IMessage[]
    chats: IChat[]
    current: number | null
}

export type State = MessengerState

