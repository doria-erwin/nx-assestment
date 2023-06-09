import React from 'react'
import IIcon from '../../types/icons'

export const Lock = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 15V12C21 9.23858 18.7614 7 16 7C13.2386 7 11 9.23858 11 12V15M12.8 25H19.2C20.8802 25 21.7202 25 22.362 24.673C22.9265 24.3854 23.3854 23.9265 23.673 23.362C24 22.7202 24 21.8802 24 20.2V19.8C24 18.1198 24 17.2798 23.673 16.638C23.3854 16.0735 22.9265 15.6146 22.362 15.327C21.7202 15 20.8802 15 19.2 15H12.8C11.1198 15 10.2798 15 9.63803 15.327C9.07354 15.6146 8.6146 16.0735 8.32698 16.638C8 17.2798 8 18.1198 8 19.8V20.2C8 21.8802 8 22.7202 8.32698 23.362C8.6146 23.9265 9.07354 24.3854 9.63803 24.673C10.2798 25 11.1198 25 12.8 25Z"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
