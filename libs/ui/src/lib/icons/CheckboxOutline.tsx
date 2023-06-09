import React from 'react'
import IIcon from '../../types/icons';

export const CheckboxOutline = ({ size = 32, color }: IIcon) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="6.75" y="6.75" width="18.5" height="18.5" stroke={color || 'currentColor'} strokeWidth="1.5" />
        </svg>
    )
}
