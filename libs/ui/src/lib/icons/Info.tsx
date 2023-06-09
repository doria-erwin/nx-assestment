import IIcon from '../../types/icons'

export const Info = ({ size = 32, color }: IIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 6C14.0222 6 12.0888 6.58649 10.4443 7.6853C8.79981 8.78412 7.51809 10.3459 6.76121 12.1732C6.00433 14.0004 5.8063 16.0111 6.19215 17.9509C6.578 19.8907 7.53041 21.6725 8.92894 23.0711C10.3275 24.4696 12.1093 25.422 14.0491 25.8078C15.9889 26.1937 17.9996 25.9957 19.8268 25.2388C21.6541 24.4819 23.2159 23.2002 24.3147 21.5557C25.4135 19.9112 26 17.9778 26 16C25.9971 13.3487 24.9426 10.8068 23.0679 8.9321C21.1932 7.05736 18.6513 6.00287 16 6ZM16.2083 10.1667C16.4556 10.1667 16.6972 10.24 16.9028 10.3773C17.1084 10.5147 17.2686 10.7099 17.3632 10.9383C17.4578 11.1667 17.4825 11.4181 17.4343 11.6605C17.3861 11.903 17.267 12.1257 17.0922 12.3005C16.9174 12.4754 16.6947 12.5944 16.4522 12.6426C16.2097 12.6909 15.9584 12.6661 15.73 12.5715C15.5016 12.4769 15.3064 12.3167 15.169 12.1111C15.0316 11.9056 14.9583 11.6639 14.9583 11.4167C14.9583 11.0851 15.09 10.7672 15.3245 10.5328C15.5589 10.2984 15.8768 10.1667 16.2083 10.1667ZM18.0833 21.4167H14.75C14.529 21.4167 14.317 21.3289 14.1607 21.1726C14.0045 21.0163 13.9167 20.8043 13.9167 20.5833C13.9167 20.3623 14.0045 20.1504 14.1607 19.9941C14.317 19.8378 14.529 19.75 14.75 19.75H15.375C15.4303 19.75 15.4832 19.728 15.5223 19.689C15.5614 19.6499 15.5833 19.5969 15.5833 19.5417V15.7917C15.5833 15.7364 15.5614 15.6834 15.5223 15.6444C15.4832 15.6053 15.4303 15.5833 15.375 15.5833H14.75C14.529 15.5833 14.317 15.4955 14.1607 15.3393C14.0045 15.183 13.9167 14.971 13.9167 14.75C13.9167 14.529 14.0045 14.317 14.1607 14.1607C14.317 14.0045 14.529 13.9167 14.75 13.9167H15.5833C16.0254 13.9167 16.4493 14.0923 16.7618 14.4048C17.0744 14.7174 17.25 15.1413 17.25 15.5833V19.5417C17.25 19.5969 17.272 19.6499 17.311 19.689C17.3501 19.728 17.4031 19.75 17.4583 19.75H18.0833C18.3043 19.75 18.5163 19.8378 18.6726 19.9941C18.8289 20.1504 18.9167 20.3623 18.9167 20.5833C18.9167 20.8043 18.8289 21.0163 18.6726 21.1726C18.5163 21.3289 18.3043 21.4167 18.0833 21.4167Z"
                fill={color || "currentColor"} />
        </svg>
    )
}
