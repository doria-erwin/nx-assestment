import React from 'react'
import IIcon from '../../types/icons'

export const Users = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.9999 19C12.8298 19 10.0106 20.5306 8.21585 22.906C7.82956 23.4172 7.63641 23.6728 7.64273 24.0183C7.64761 24.2852 7.81521 24.6219 8.02522 24.7867C8.29704 25 8.67372 25 9.42708 25H22.5726C23.326 25 23.7027 25 23.9745 24.7867C24.1845 24.6219 24.3521 24.2852 24.357 24.0183C24.3633 23.6728 24.1701 23.4172 23.7839 22.906C21.9891 20.5306 19.1699 19 15.9999 19Z"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />

            <path
                d="M15.9999 16C18.4851 16 20.4999 13.9853 20.4999 11.5C20.4999 9.01472 18.4851 7 15.9999 7C13.5146 7 11.4999 9.01472 11.4999 11.5C11.4999 13.9853 13.5146 16 15.9999 16Z"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
