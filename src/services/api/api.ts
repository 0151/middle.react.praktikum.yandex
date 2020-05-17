import chats from  './fakeData/chats.json'
import messages from  './fakeData/messages.json'
import contacts from  './fakeData/contacts.json'

//Чаты
export const fetchChats = () => chats.map(chat => {
    const chatId = chat.chatId
    const userNames = chat.users.map(userId => (contacts as TContactsMap)[userId])
    const meta = chatMeta(chatId)

    return {
        chatId,
        name: userNames.join(', '),
        ...meta
    }
})

export const chatMeta = (chatId: TUUID) => {
    const lastMessage = fetchMesssages(chatId).slice(-1)[0]

    //TODO: рефакторинг
    return {
        text: lastMessage?.text ?? '',
        timestamp: lastMessage?.timestamp ?? ''
    }
}

//Сообщения
export const fetchMesssages = (chatId: TUUID)  => (messages as TMessagesMap)[chatId]

//Контакты
export const fetchContacts = () => contacts