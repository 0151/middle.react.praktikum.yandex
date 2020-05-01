import React from 'react'

import './Avatar.css'

interface Props {
    src?: string
    alt?: string
}

export const Avatar: React.FC<Props> = ({src, alt}) => (
    <div className="avatar">
        {src && //Так и было задумано) Если в пропс не придет src, div.avatar останется в DOM в качестве плейсхолдера
            <img className="avatar__image" src={src} alt={alt} />
        }
    </div>
)