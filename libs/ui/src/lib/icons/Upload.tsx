import React from 'react'
import IIcon from '../../types/icons'

export const Upload = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 20.2422C6.79401 19.435 6 18.0602 6 16.5C6 14.1564 7.79151 12.2313 10.0797 12.0194C10.5478 9.17213 13.0202 7 16 7C18.9798 7 21.4522 9.17213 21.9203 12.0194C24.2085 12.2313 26 14.1564 26 16.5C26 18.0602 25.206 19.435 24 20.2422M12 20L16 16M16 16L20 20M16 16V25"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
