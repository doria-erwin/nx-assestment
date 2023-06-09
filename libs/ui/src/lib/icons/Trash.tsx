import React from 'react'
import IIcon from '../../types/icons'

export const Trash = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 10V9.2C20 8.0799 20 7.51984 19.782 7.09202C19.5903 6.71569 19.2843 6.40973 18.908 6.21799C18.4802 6 17.9201 6 16.8 6H15.2C14.0799 6 13.5198 6 13.092 6.21799C12.7157 6.40973 12.4097 6.71569 12.218 7.09202C12 7.51984 12 8.0799 12 9.2V10M7 10H25M23 10V21.2C23 22.8802 23 23.7202 22.673 24.362C22.3854 24.9265 21.9265 25.3854 21.362 25.673C20.7202 26 19.8802 26 18.2 26H13.8C12.1198 26 11.2798 26 10.638 25.673C10.0735 25.3854 9.6146 24.9265 9.32698 24.362C9 23.7202 9 22.8802 9 21.2V10"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
