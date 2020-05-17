type TUUID = string

type TChat = {
    chatId: TUUID
    name: string
    text?: string
    timestamp: string
}

type TMessage = {
    messageId: TUUID
    author: string
    timestamp: string
    text: string
}

interface TMessagesMap {
    [chatId: string]: TMessage[]
}

type TContactsMap = {
    [userId: string]: string
}

interface FormState {
    fields: {
        [name: string]: string
    }
    errors: {
        //TODO: Хранить несколько ошибок, использовать массив
        [name: string]: string
    }
}