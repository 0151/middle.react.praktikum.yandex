import {FC} from 'react'

import {IChat, IMessage} from '../../types/messanger'

interface OwnProps {
    chats: IChat[]
    current: number | null
    handleClick: Function
}

export type Props = FC<OwnProps>