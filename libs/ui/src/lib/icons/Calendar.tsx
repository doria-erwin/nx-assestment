import React from 'react'
import IIcon from '../../types/icons';

export const Calendar = ({ size = 32, color }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 14H7M20 6V10M12 6V10M11.8 26H20.2C21.8802 26 22.7202 26 23.362 25.673C23.9265 25.3854 24.3854 24.9265 24.673 24.362C25 23.7202 25 22.8802 25 21.2V12.8C25 11.1198 25 10.2798 24.673 9.63803C24.3854 9.07354 23.9265 8.6146 23.362 8.32698C22.7202 8 21.8802 8 20.2 8H11.8C10.1198 8 9.27976 8 8.63803 8.32698C8.07354 8.6146 7.6146 9.07354 7.32698 9.63803C7 10.2798 7 11.1198 7 12.8V21.2C7 22.8802 7 23.7202 7.32698 24.362C7.6146 24.9265 8.07354 25.3854 8.63803 25.673C9.27976 26 10.1198 26 11.8 26Z"
        stroke={color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}
