export interface IChat {
    chatId: number
    name: string
    text?: string
    date: Date
    messages?: IMessage[]
}

export interface IMessage {
    messageId: number
    date: Date
    text: string
}