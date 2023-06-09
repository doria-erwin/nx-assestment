/* eslint-disable react/jsx-no-useless-fragment */
import clsx from 'classnames';
import * as React from 'react';
import { Chart } from '../../icons/Chart';
import { TableIcon } from '../../icons/Table';
import cx from './toggle.module.scss';

interface ToggleProps {
    isToggle: boolean;
    disabled?: boolean;
    emitToggle?: (val: boolean) => void;
    withIcon?: boolean
}

export const Toggle = ({
    isToggle = false,
    disabled = false,
    emitToggle,
    withIcon = false
}: ToggleProps) => {
    const [isToggleVal, setIsToggleVal] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsToggleVal(isToggle);
    }, [isToggle]);

    const handleToggle = () => {
        if (!disabled) {
            const toggleValue = !isToggleVal;
            setIsToggleVal(toggleValue);
            emitToggle && emitToggle(toggleValue);
        }
    };

    return (
        <div
            className={clsx(cx['toggle-wrapper'], {
                [cx['toggle-disabled']]: disabled,
                [cx['isToggled']]: isToggleVal,
                [cx['-withIcon']]: withIcon
            })}
            onClick={handleToggle}
        >
            <div
                className={clsx(cx['toggle-switch'], {
                    [cx['isToggled']]: isToggleVal,
                })}
            />

            {withIcon && (
                <div className={cx['toggle-icon']}>
                    <div>
                        <TableIcon
                            size={16}
                            color={isToggleVal ? undefined : '#2B6EA7'}
                            secondaryColor={isToggleVal ? undefined : '#96B7D4'} />
                    </div>
                    <div>
                        <Chart size={16}
                            color={isToggleVal ? '#2B6EA7' : undefined}
                            secondaryColor={isToggleVal ? '#96B7D4' : undefined} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Toggle;
