import {FC} from 'react'

import {IMessage} from '../../types/messenger'

interface ChatProps {
    messages: IMessage[]
}

export type Props = FC<ChatProps>