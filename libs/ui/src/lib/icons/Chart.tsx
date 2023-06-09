import IIcon from '../../types/icons';

export const Chart = ({ size = 24, color = '#8F95B2', secondaryColor = '#C1C4D6', className }: IIcon) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00004 14.6663H10C13.3334 14.6663 14.6667 13.333 14.6667 9.99967V5.99967C14.6667 2.66634 13.3334 1.33301 10 1.33301H6.00004C2.66671 1.33301 1.33337 2.66634 1.33337 5.99967V9.99967C1.33337 13.333 2.66671 14.6663 6.00004 14.6663Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3333 12.3337C11.0667 12.3337 11.6667 11.7337 11.6667 11.0003V5.00033C11.6667 4.26699 11.0667 3.66699 10.3333 3.66699C9.6 3.66699 9 4.26699 9 5.00033V11.0003C9 11.7337 9.59333 12.3337 10.3333 12.3337Z" fill={secondaryColor} />
            <path d="M5.66671 12.333C6.40004 12.333 7.00004 11.733 7.00004 10.9997V8.66634C7.00004 7.93301 6.40004 7.33301 5.66671 7.33301C4.93337 7.33301 4.33337 7.93301 4.33337 8.66634V10.9997C4.33337 11.733 4.92671 12.333 5.66671 12.333Z" fill={secondaryColor} />
        </svg>
    )
}