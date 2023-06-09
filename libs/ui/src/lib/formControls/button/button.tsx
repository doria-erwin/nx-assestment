import { Spinner } from '@ui-components';
import { ButtonType, Variant } from '@ui-types/button';
import IIcon from '@ui-types/icons';
import clsx from 'classnames';
import styles from "./button.module.scss";

/* eslint-disable-next-line */
export interface ButtonProps {
    label: string,
    className?: string,
    variant?: Variant,
    disabled?: boolean,
    isProcessing?: boolean,
    leftIcon?: React.ElementType<IIcon>,
    rightIcon?: React.ElementType<IIcon>,
    type?: ButtonType | undefined,
    onClick?: () => void
}

export function Button({
    label,
    className = '',
    variant = 'primary',
    disabled = false,
    isProcessing = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    type = 'button',
    onClick
}: ButtonProps) {

    return (
        <button
            className={clsx(styles['app-button'], styles[`btn-${variant}`], className)}
            disabled={disabled}
            type={type}
            onClick={onClick}>
            {isProcessing && (
                <div className={styles.loader}>
                    <Spinner />
                </div>
            )}

            <div className={clsx(styles['btn-content'], { [styles['btn-loading']]: isProcessing })}>
                {LeftIcon && <LeftIcon size={18} />}
                <p className={LeftIcon ? 'pr-2' : RightIcon ? 'pl-2' : ''}>{label}</p>
                {RightIcon && <RightIcon size={18} />}
            </div>
        </button>
    );
}

export default Button;
