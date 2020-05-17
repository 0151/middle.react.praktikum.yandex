import React, { FC, HTMLProps } from 'react'
import {cn as createCn} from '@bem-react/classname'

import './Input.css'

interface InputProps {
    error?: string
}

export const Input: FC<InputProps & HTMLProps<HTMLInputElement>> = (props) => {
    const cn = createCn('input')
    
    const {
        error,
        className,
        ...other
    } = props

    const resultClassName = cn({
        invalid: !!error
    })

    return (
        <div className={resultClassName}>
            <input className="input__control" {...other} />
            {error &&
            <div className="input__error">{error}</div>}
        </div>
    )
}