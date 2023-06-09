/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable react/jsx-no-useless-fragment */
import { CheckboxFilled, CheckboxOutline, ChevronDown as IconChevDown, Typography } from "@ui-components";
import IIcon from '@ui-types/icons';
import colors from '@ui/styles/colors';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import cx from './dropdown.module.scss';

export interface DropDownListProps {
    label: string,
    value: string | number,
    icon?: React.ElementType<IIcon>,
    disabled?: boolean
}

export interface DropdownProps {
    label?: string,
    placeholder?: string
    listItem?: Array<DropDownListProps>
    emitSelected?: (item: DropDownListProps) => void
    isCheckList?: boolean,
    componentTrigger?: React.ReactNode,
    dropPosition?: 'left' | 'right' | 'top',
    selected?: string,
    isSearchable?: boolean,
    icon?: React.ElementType<IIcon>,
    children?: React.ReactNode,
    className?: string,
    shouldAutoDismiss?: boolean,
    contentClassName?: string,
    withUpdatingOptions?: boolean
}


export const Dropdown = ({
    isCheckList = false,
    label = '',
    placeholder,
    listItem = [],
    emitSelected,
    componentTrigger,
    dropPosition = 'left',
    selected,
    isSearchable = true,
    icon: Icon,
    children,
    className,
    shouldAutoDismiss = true,
    contentClassName,
    withUpdatingOptions
}: DropdownProps) => {
    const [isToogle, setIsToggle] = React.useState<boolean>(false);
    const [searchTerm, setSearchTerm] = React.useState<string>('')
    const [searchResult, setSearchResult] = React.useState<Array<DropDownListProps>>([])

    React.useEffect(() => {
        if (withUpdatingOptions) {
            handleUpdateSelectedOnOptionChanged();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listItem]);

    const ref = useDetectClickOutside({
        onTriggered: (e) => {
            if (e.target && shouldAutoDismiss) {
                setIsToggle(false)
            }
        }
    })

    const handleUpdateSelectedOnOptionChanged = () => {
        if (listItem.some(li => li.disabled)) {
            const firstNotDisabled = listItem.find((li: DropDownListProps) => !li.disabled);

            if (firstNotDisabled && selected !== firstNotDisabled?.value) {
                emitSelected && emitSelected(firstNotDisabled);
            }
        }
    }

    const handleSearchList = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)

        const result = listItem.filter((v) => v.label.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setSearchResult(result)
    }

    const handleSelectedList = (item: DropDownListProps) => {
        setSearchTerm(`${item.label}`)

        if (!isCheckList) {
            setSearchResult(listItem)
            setIsToggle(false)
        }

        emitSelected && emitSelected(item)
    }

    const handleToggle = () => {
        setIsToggle(!isToogle)
    }

    const renderDropwdownList = () => {
        const displayList = searchTerm.length === 0 ? listItem : searchResult;

        if (isToogle) {
            return (
                <motion.div
                    className={cn(cx['dropdown__content'],
                        {
                            'right-0': dropPosition === 'right',
                            'bottom-16': dropPosition === 'top',
                            'max-h-[18.25rem]': !children,
                            'overflow-auto': !children,
                            [contentClassName as string]: !!contentClassName
                        })}
                    key='content'
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                        duration: 0.1,
                        transformOrigin: "top right",
                        ease: [0.2, 0, 0.38, 0.9]
                    }}
                >
                    {children
                        ? children
                        : <>
                            {
                                displayList.map((v, i) => {
                                    const Icon = v.icon;

                                    return (
                                        <div
                                            key={i}
                                            className={cn(cx['dropdown-list-item'], {
                                                [cx['-selected']]: v.value === selected && !isCheckList,
                                                'hover:bg-C50 hover:cursor-pointer': !v.disabled,
                                            })}
                                            onClick={v.disabled ? undefined : () => handleSelectedList(v)}>
                                            {isCheckList && <div className={cx['checkbox']}>
                                                {((v.value === 'all' && (selected?.split(',').length === displayList.length - 1))
                                                    || selected?.includes(`${v.value}`)) ? <CheckboxFilled color={colors.C400} /> : <CheckboxOutline />}
                                            </div>}

                                            {Icon && <Icon size={16} />}
                                            <Typography color={v.disabled ? 'text-N500' : 'text-N700'} className='whitespace-nowrap'>{v.label}</Typography>
                                        </div>
                                    )
                                })
                            }
                            {
                                searchTerm.length !== 0 && searchResult.length === 0 && <div className={cx['dropdown-list-item']}>No results found</div>
                            }
                        </>
                    }
                </motion.div>
            )
        }
    }

    return (
        <div className={cn(
            cx['dropdown-wrapper'],
            'relative',
            {
                '-with-component-trigger': !!componentTrigger,
                [`${className}`]: !!className,
                'bg-N0': !componentTrigger
            }
        )}>
            {label && <div className={cx['label']}>{label}</div>}
            {componentTrigger
                ? <div ref={ref} className='hover:cursor-pointer' onClick={handleToggle}>
                    {componentTrigger}
                </div>
                : <div className={cn(cx['dropdown-field'], 'hover:cursor-pointer')} ref={ref} onClick={handleToggle}>
                    {Icon && <div className='mr-3'>
                        <Icon size={22} />
                    </div>}
                    <input
                        readOnly={!isSearchable}
                        type="text"
                        className={cn(cx['input'], 'bg-transparent', { 'hover:cursor-pointer': !isSearchable })}
                        placeholder={placeholder}
                        value={searchTerm || selected}
                        onChange={(e) => isSearchable && handleSearchList(e)}
                    />
                    {/* {// TODO fix bug with searchTerm
                        searchTerm?.length !== 0 &&
                        <div onClick={() => setSearchTerm('')}>
                            <IconClose size={16} className={cx['icon-clear']} />
                        </div>
                    } */}
                    <IconChevDown size={16} />
                </div>
            }

            <AnimatePresence initial={false}>
                {renderDropwdownList()}
            </AnimatePresence>

        </div>
    )
}

export default Dropdown;
