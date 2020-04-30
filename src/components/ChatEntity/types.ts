import {FC} from 'react'

interface OwnProps {
    chatId: number
    name: string
    text?: string
    date: Date
    isCurrent: boolean
    handleClick: Function
}

export type Props = FC<OwnProps>