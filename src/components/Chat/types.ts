import {FC} from 'react'

import {IMessage} from '../../types/messanger'

interface ChatProps {
    messages: IMessage[]
}

export type Props = FC<ChatProps>