import React from 'react'
import IIcon from '../../types/icons'

export const Competencies = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 19.0903V26L15.7029 24.1188C15.8126 24.0749 15.8675 24.053 15.9242 24.0443C15.9744 24.0366 16.0256 24.0366 16.0758 24.0443C16.1325 24.053 16.1874 24.0749 16.2971 24.1188L21 26V19.0903M23.5 13.5C23.5 17.6421 20.1421 21 16 21C11.8579 21 8.5 17.6421 8.5 13.5C8.5 9.35786 11.8579 6 16 6C20.1421 6 23.5 9.35786 23.5 13.5Z"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
