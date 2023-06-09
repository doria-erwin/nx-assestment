import IIcon from '../../types/icons'

export const Success = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8078C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C25.9969 13.3488 24.9424 10.807 23.0677 8.93234C21.193 7.05765 18.6512 6.00309 16 6ZM20.5483 13.5117C20.8309 13.2089 20.8146 12.7343 20.5117 12.4517C20.2089 12.1691 19.7343 12.1854 19.4517 12.4883L14.4 17.9008L12.5483 15.9168C12.2657 15.614 11.7911 15.5976 11.4883 15.8803C11.1854 16.1629 11.1691 16.6375 11.4517 16.9403L13.8517 19.5117C13.9936 19.6637 14.1921 19.75 14.4 19.75C14.6079 19.75 14.8065 19.6637 14.9483 19.5117L20.5483 13.5117Z"
                fill={color || "#BAC339"} />
        </svg>
    )
}