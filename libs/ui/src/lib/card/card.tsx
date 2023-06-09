import { ReactNode } from "react";
import Typography from "../typography/typography";

export interface CardProps {
    children: ReactNode,
    title?: string,
    subTitle?: string
}

export function Card({ children, title, subTitle }: CardProps) {
    return (
        <div className='bg-N0 border border-N100 rounded-lg p-6'>
            {title &&
                <Typography size='text-lg' fontWeight='font-black'>{title}</Typography>
            }
            {subTitle &&
                <Typography >{subTitle}</Typography>
            }

            {children}
        </div>
    );
}

export default Card;
