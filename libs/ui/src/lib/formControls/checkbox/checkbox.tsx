import { CheckboxFilled, CheckboxOutline, Typography } from "@ui-components";
import colors from '@ui/styles/colors';
import { useState } from "react";
import styles from './checkbox.module.scss';

/* eslint-disable-next-line */
export interface CheckboxProps {
    isChecked?: boolean,
    onClick?: (value: boolean) => void,
    label: string,
    isDisabled?: boolean,
    error?: string
}

export function Checkbox({ isChecked = false, onClick, label = 'Placeholder', isDisabled, error }: CheckboxProps) {
    const [checked, setChecked] = useState(isChecked);

    const handleClick = () => {
        const updated = !checked;

        onClick && onClick(updated);
        setChecked(updated);
    }

    return (
        <>
            <div className={styles.checkbox} onClick={isDisabled ? undefined : handleClick}>
                <div>
                    {checked
                        ? <CheckboxFilled color={isDisabled ? colors.N500 : colors.C400} size={18} />
                        : <CheckboxOutline color={isDisabled ? colors.N500 : colors.N600} size={18} />
                    }

                </div>
                <Typography color={isDisabled ? 'text-N500' : undefined}>{label}</Typography>
            </div>

            {error &&
                <Typography color='text-R500' size='text-sm' className='ml-5'>{error}</Typography>
            }
        </>
    );
}

export default Checkbox;

