const chats = [
    {
        chatId: 1,
        name: 'Тихонов Яков',
        text: 'И все на дистанционном обучении!',
        date: new Date(2019, 0, 21),
        messages: [
            {
                messageId: 1,
                date: new Date(2019, 0, 21, 10, 12),
                text: 'Прикинь, сон приснился, что у меня четверо детей',
            },
            {
                messageId: 2,
                date: new Date(2019, 0, 21, 10, 13),
                text: 'И все на дистанционном обучении!',
            }
        ]
    },
    {
        chatId: 2,
        name: 'Палий Данила',
        text: 'А может, удалить 2020 и снова установить? А то эта версия с вирусом',
        date: new Date(2020, 0, 20),
        messages: [
            {
                messageId: 1,
                date: new Date(2020, 0, 20, 18, 40),
                text: 'А может, удалить 2020 и снова установить? А то эта версия с вирусом',
            }
        ]
    },
    {
        chatId: 3,
        name: 'Буров Корнелий',
        text: 'Я говорю - сделай гифку, пусть считают',
        date: new Date(2018, 3, 10),
        messages: [
            {
                messageId: 1,
                date: new Date(2018, 3, 10, 14, 0),
                text: 'Моему сыну по физо прислали: "Сделать упражнение на плечевой пояс столько-то раз, прислать видео',
            },
            {
                messageId: 2,
                date: new Date(2018, 3, 10, 14, 2),
                text: 'Я говорю - сделай гифку, пусть считают',
            }
        ]

    },
    {
        chatId: 4,
        name: 'Шухевич Регина',
        text: 'Ой! А я тебя без маски и не узнала!',
        date: new Date(2018, 3, 10),
        messages: [
            {
                messageId: 1,
                date: new Date(2018, 3, 10, 9, 3),
                text: 'Ой! А я тебя без маски и не узнала!',
            }
        ]

    },
]

export {chats}