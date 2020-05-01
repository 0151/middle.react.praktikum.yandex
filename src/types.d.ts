type TChatId = number

type TChat = {
    chatId: TChatId
    name: string
    text?: string
    date: Date
}

type TMessageId = number

type TMessage = {
    messageId: TMessageId
    chatId: TChatId
    date: Date
    text: string
}

