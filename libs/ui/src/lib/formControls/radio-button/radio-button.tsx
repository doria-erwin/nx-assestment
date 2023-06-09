import { RadioEmpty, RadioFilled } from "@ui-components";

/* eslint-disable-next-line */
export interface RadioButtonProps {
    isChecked?: boolean,
    onClick?: (value: boolean) => void
}

export function RadioButton({ isChecked = false, onClick }: RadioButtonProps) {

    const handleClick = () => {
        onClick && onClick(!isChecked);
    }

    return (
        <div className='hover:cursor-pointer' onClick={handleClick}>
            {isChecked
                ? <RadioFilled color='#3891A1' size={20} />
                : <RadioEmpty color='#163141' size={20} />
            }
        </div>
    );
}

export default RadioButton;
