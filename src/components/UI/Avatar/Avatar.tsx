import React from 'react'

import {Props} from './types'

import './Avatar.css'

const Avatar: Props = ({src, alt}) => (
    <div className="avatar">
        {src &&
            <img className="avatar__image" src={src} alt={alt} />
        }
    </div>
)

export default Avatar