import { initials } from '@utils';
import clsx from 'classnames';
import Image from 'next/image';
import { Typography } from "../..";
import styles from "./avatar.module.scss";

/* eslint-disable-next-line */
export interface AvatarProps {
    // This will be used to display initials, if not image was provided
    label: string,
    src?: string,
    size?: 'sm' | 'md' | 'lg',
}

export function Avatar({ label, src, size = 'md' }: AvatarProps) {
    const imageSize = size === 'lg' ? 128 : size ==='md' ? 64 : 32;
    const textSize = size === 'lg' ? 'text-4xl' : size ==='md' ? 'text-lg' : 'text-sm';
    const containerSize = size === 'lg' ? 'h-32 w-32' : size === 'md' ? 'h-16 w-16' : 'h-8 w-8';

    return (
        <div className={clsx(
            styles['avatar'],
            'bg-CY100',
            'rounded-full',
            containerSize
        )}>
            {src
                ? <Image src={src} alt={label} width={imageSize} height={imageSize} className='rounded-full' />
                : <Typography
                    size={textSize}
                    fontWeight='font-black'
                    color='text-CY600'>{initials(label)}</Typography>
            }
        </div>
    );
}

export default Avatar;
