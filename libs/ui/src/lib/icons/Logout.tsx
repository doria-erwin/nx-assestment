import React from 'react'
import IIcon from '../../types/icons'

export const Logout = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 21L25 16M25 16L20 11M25 16H13M13 7H11.8C10.1198 7 9.27976 7 8.63803 7.32698C8.07354 7.6146 7.6146 8.07354 7.32698 8.63803C7 9.27976 7 10.1198 7 11.8V20.2C7 21.8802 7 22.7202 7.32698 23.362C7.6146 23.9265 8.07354 24.3854 8.63803 24.673C9.27976 25 10.1198 25 11.8 25H13"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
