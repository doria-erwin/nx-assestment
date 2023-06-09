import React from 'react'
import IIcon from '../../types/icons';

export const CheckboxFilled = ({ size = 32, color }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="6.75" y="6.75" width="18.5" height="18.5" fill={color} stroke={color || 'currentColor'} strokeWidth="1.5" />
      <path d="M20 13L14.4 19L12 16.4286" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
