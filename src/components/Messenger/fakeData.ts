export const chats: TChat[] = [
    {
        chatId: 1,
        name: 'Тихонов Яков',
        text: 'И все на дистанционном обучении!',
        date: new Date(2019, 0, 21),
    },
    {
        chatId: 2,
        name: 'Палий Данила',
        text: 'А может, удалить 2020 и снова установить? А то эта версия с вирусом',
        date: new Date(2020, 0, 20),
    },
    {
        chatId: 3,
        name: 'Буров Корнелий',
        text: 'Я говорю - сделай гифку, пусть считают',
        date: new Date(2018, 3, 10),
    },
    {
        chatId: 4,
        name: 'Шухевич Регина',
        text: 'Ой! А я тебя без маски и не узнала!',
        date: new Date(2018, 3, 10),
    },
]

export const messages: TMessage[] = [
    {
        messageId: 1,
        chatId: 1,
        date: new Date(2019, 0, 21, 10, 12),
        text: 'Прикинь, сон приснился, что у меня четверо детей',
    },
    {
        messageId: 2,
        chatId: 1,
        date: new Date(2019, 0, 21, 10, 13),
        text: 'И все на дистанционном обучении!',
    },
    {
        messageId: 3,
        chatId: 2,
        date: new Date(2020, 0, 20, 18, 40),
        text: 'А может, удалить 2020 и снова установить? А то эта версия с вирусом',
    },
    {
        messageId: 4,
        chatId: 3,
        date: new Date(2018, 3, 10, 14, 0),
        text: 'Моему сыну по физо прислали: "Сделать упражнение на плечевой пояс столько-то раз, прислать видео',
    },
    {
        messageId: 5,
        chatId: 3,
        date: new Date(2018, 3, 10, 14, 2),
        text: 'Я говорю - сделай гифку, пусть считают',
    },
    {
        messageId: 6,
        chatId: 4,
        date: new Date(2018, 3, 10, 14, 2),
        text: 'Ой! А я тебя без маски и не узнала!',
    }
]