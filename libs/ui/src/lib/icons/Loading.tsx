import React from 'react'
import IIcon from '../../types/icons'

export const Loading = ({ size = 32, color, className }: IIcon) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 6V10M16 22V26M10 16H6M26 16H22M23.0784 23.0784L20.25 20.25M23.0784 8.99994L20.25 11.8284M8.92157 23.0784L11.75 20.25M8.92157 8.99994L11.75 11.8284"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}
