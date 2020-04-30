import {FC} from 'react'

interface MessageProps {
    text: string
    date: Date
}

export type Props = FC<MessageProps>