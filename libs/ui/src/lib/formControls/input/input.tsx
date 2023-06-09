import { Close as IconClose, Error as IconError, Search as IconSearch } from '@ui-components';
import clsx from 'classnames';
import * as React from 'react';
import { ChangeEventHandler } from 'react';
import cx from './input.module.css';

interface InputProps {
    variant?: 'default' | 'error' | 'disabled'
    type?: 'text' | 'password' | 'number'
    withPrefixIcon?: boolean
    withSuffixIcon?: boolean
    placeholder?: string
    helperText?: string
    label?: string
    value?: string | number
    emitTextChange?: (val: string | number) => void,
    className?: string,
    component?: 'input' | 'textarea'
}

export const Input = ({
    variant = 'default',
    type = 'text',
    withPrefixIcon = false,
    withSuffixIcon = false,
    label,
    placeholder,
    helperText,
    value,
    emitTextChange,
    className,
    component: Component = 'input',
    ...rest
}: InputProps) => {
    const [val, setVal] = React.useState<string | number>('');

    React.useEffect(() => {
        if (value) {
            setVal(value)
        }
    }, [])

    const suffixIcon = () => {
        if (withSuffixIcon) {
            switch (variant) {
                case 'error':
                    return <IconError size={16} color="#AB2E43" />

                default:
                    return <IconClose size={16} />
            }
        }
    }

    const prefixIcon = () => {
        if (withPrefixIcon) {
            return <div className={cx['prefixIcon']}>
                <IconSearch size={24} />
            </div>
        }
    }

    // const onInputChange = (e) => {
    const onInputChange: (ChangeEventHandler<HTMLInputElement> & ChangeEventHandler<HTMLTextAreaElement>) = (e) => {
        const value = e.target.value
        setVal(value)
        emitTextChange && emitTextChange(value)
    }

    return (
        <div className={clsx(cx['input-wrapper'], {
            [cx['input-error']]: variant === 'error',
            [cx['input-disabled']]: variant === 'disabled',
            [`${className}`]: !!className
        })}>
            <div className={cx['input-field']}>

                {prefixIcon()}

                <Component
                    type={type}
                    readOnly={variant === 'disabled'}
                    className={clsx(cx['input'], 'bg-transparent', { 'hover:cursor-default': variant === 'disabled' })}
                    placeholder={placeholder || label}
                    value={val}
                    spellCheck={false}
                    rows={4}
                    onChange={onInputChange}
                    {...rest}
                />
                <div className={clsx(cx['label'], {
                    [cx['label-with-placeholder']]: placeholder?.length !== 0,
                    [cx['label-with--prefixIcon']]: withPrefixIcon
                })}>{label}</div>

                {suffixIcon()}
            </div>
            <div className={cx['helper-text']}>{helperText}</div>
        </div>
    )
}

export default Input
