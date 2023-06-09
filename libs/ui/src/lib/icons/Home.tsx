import React from 'react'
import IIcon from '../../types/icons'

export const Home = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.9823 7.49715C16.631 7.2239 16.4553 7.08727 16.2613 7.03476C16.0902 6.98841 15.9098 6.98841 15.7387 7.03476C15.5447 7.08727 15.369 7.2239 15.0177 7.49715L8.23539 12.7723C7.78202 13.1249 7.55534 13.3012 7.39203 13.522C7.24737 13.7176 7.1396 13.9379 7.07403 14.1722C7 14.4367 7 14.7239 7 15.2982V22.5331C7 23.6532 7 24.2133 7.21799 24.6411C7.40973 25.0174 7.71569 25.3234 8.09202 25.5152C8.51984 25.7331 9.0799 25.7331 10.2 25.7331H12.2C12.48 25.7331 12.62 25.7331 12.727 25.6786C12.8211 25.6307 12.8976 25.5542 12.9455 25.4601C13 25.3532 13 25.2132 13 24.9331V18.3331C13 17.7731 13 17.4931 13.109 17.2791C13.2049 17.091 13.3578 16.938 13.546 16.8421C13.7599 16.7331 14.0399 16.7331 14.6 16.7331H17.4C17.9601 16.7331 18.2401 16.7331 18.454 16.8421C18.6422 16.938 18.7951 17.091 18.891 17.2791C19 17.4931 19 17.7731 19 18.3331V24.9331C19 25.2132 19 25.3532 19.0545 25.4601C19.1024 25.5542 19.1789 25.6307 19.273 25.6786C19.38 25.7331 19.52 25.7331 19.8 25.7331H21.8C22.9201 25.7331 23.4802 25.7331 23.908 25.5152C24.2843 25.3234 24.5903 25.0174 24.782 24.6411C25 24.2133 25 23.6532 25 22.5331V15.2982C25 14.7239 25 14.4367 24.926 14.1722C24.8604 13.9379 24.7526 13.7176 24.608 13.522C24.4447 13.3012 24.218 13.1249 23.7646 12.7723L16.9823 7.49715Z"
                stroke={color || 'currentColor'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}
