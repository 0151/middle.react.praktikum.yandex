import React, { FC } from 'react'

import './Avatar.css'

interface AvatarProps {
    src?: string
    alt?: string
}

export const Avatar: FC<AvatarProps> = ({src, alt}) => (
    <div className="avatar">
        {src &&
            <img className="avatar__image" src={src} alt={alt} />
        }
    </div>
)