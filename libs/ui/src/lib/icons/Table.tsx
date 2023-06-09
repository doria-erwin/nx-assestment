import IIcon from '../../types/icons';

export const TableIcon = ({ size = 24, color = '#8F95B2', secondaryColor = '#C1C4D6', className }: IIcon) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.66663 14.6475L5.66663 1.33413" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3334 14.6475V1.33413" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.6598 10.3271H1.33984" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.6598 5.66016L1.33984 5.66016" stroke={secondaryColor} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.6667 10.0003V6.00033C14.6667 2.66699 13.3334 1.33366 10 1.33366H6.00004C2.66671 1.33366 1.33337 2.66699 1.33337 6.00033L1.33337 10.0003C1.33337 13.3337 2.66671 14.667 6.00004 14.667H10C13.3334 14.667 14.6667 13.3337 14.6667 10.0003Z" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}