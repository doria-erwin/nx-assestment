import IIcon from '../../types/icons';

export const Error = ({ size = 24, color = '#8F95B2', className }: IIcon) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={'#fff'} />
            <path d="M12 13.75C12.41 13.75 12.75 13.41 12.75 13V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V13C11.25 13.41 11.59 13.75 12 13.75Z" fill={color} />
            <path d="M12.92 15.62C12.87 15.5 12.8 15.39 12.71 15.29C12.61 15.2 12.5 15.13 12.38 15.08C12.14 14.98 11.86 14.98 11.62 15.08C11.5 15.13 11.39 15.2 11.29 15.29C11.2 15.39 11.13 15.5 11.08 15.62C11.03 15.74 11 15.87 11 16C11 16.13 11.03 16.26 11.08 16.38C11.13 16.51 11.2 16.61 11.29 16.71C11.39 16.8 11.5 16.87 11.62 16.92C11.74 16.97 11.87 17 12 17C12.13 17 12.26 16.97 12.38 16.92C12.5 16.87 12.61 16.8 12.71 16.71C12.8 16.61 12.87 16.51 12.92 16.38C12.97 16.26 13 16.13 13 16C13 15.87 12.97 15.74 12.92 15.62Z" fill={color} />
        </svg>
    )
}