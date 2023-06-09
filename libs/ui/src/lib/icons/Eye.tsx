import React from 'react'
import IIcon from '../../types/icons'

export const Eye = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42012 16.7132C6.28394 16.4975 6.21584 16.3897 6.17772 16.2234C6.14909 16.0985 6.14909 15.9015 6.17772 15.7766C6.21584 15.6103 6.28394 15.5025 6.42012 15.2868C7.54553 13.5048 10.8954 9 16.0004 9C21.1054 9 24.4553 13.5048 25.5807 15.2868C25.7169 15.5025 25.785 15.6103 25.8231 15.7766C25.8517 15.9015 25.8517 16.0985 25.8231 16.2234C25.785 16.3897 25.7169 16.4975 25.5807 16.7132C24.4553 18.4952 21.1054 23 16.0004 23C10.8954 23 7.54553 18.4952 6.42012 16.7132Z" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.0004 19C17.6573 19 19.0004 17.6569 19.0004 16C19.0004 14.3431 17.6573 13 16.0004 13C14.3435 13 13.0004 14.3431 13.0004 16C13.0004 17.6569 14.3435 19 16.0004 19Z" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
