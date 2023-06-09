import clsx from 'classnames';
import { AlertType } from "../../types/alert";
import { Close, Info, Success, Warning } from "../icons";
import Typography from '../typography/typography';
import styles from "./alert.module.scss";

/* eslint-disable-next-line */
export interface AlertProps {
    type?: AlertType,
    title: string,
    description: string,
    onClick: () => void
}

export function Alert({
    type = 'info',
    title, description,
    onClick
}: AlertProps) {
    const Icon = type === 'info'
        ? Info : type === 'success'
            ? Success : Warning;

    return (
        <div className={clsx(styles["alert"], styles[type], 'border', {
            'border-C100': type === 'info',
            'border-G100': type === 'success',
            'border-R100': type === 'error'
            // 'border-A100': type === 'warning'
        })}>
            <div className='mt-1'>
                <Icon size={16} color={type === 'info'
                    ? '#005095' : type === 'success'
                        ? '#009353' : '#F44160'} />
            </div>

            <div className={styles['alert-message']}>
                <Typography
                    color={`text-${type === 'info'
                        ? 'C500' : type === 'success'
                            ? 'G500' : 'R500'}`}
                    fontWeight='font-black'>
                    {title}
                </Typography>
                {description && <Typography color='text-N800'>{description}</Typography>}
            </div>

            <div className={styles['alert-close']} onClick={onClick}>
                <Close size={12} className='text-N600' />
            </div>
        </div>
    );
}

export default Alert;
