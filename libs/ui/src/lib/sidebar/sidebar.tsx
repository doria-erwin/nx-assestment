/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import LOGO from '@ui/assets/images/logos/logo.png';
import colors from '@ui/styles/colors';
import clsx from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '../../types/menu';
import Avatar from "../avatar/avatar";
import { Collapse, Sort } from '../icons';
import Tooltip from '../tooltip/tooltip';
import Typography from '../typography/typography';
import ProfileWrapper from './profileWrapper';
import styles from "./sidebar.module.scss";

/* eslint-disable-next-line */
export interface SidebarProps {
    onClick?: () => void,
    menu?: Array<{
        sectionTitle: string,
        menuItems: Menu[]
    }>,
    profile?: {
        name?: string,
        email?: string
    },
    onLogout?: () => void
}

const COLLAPSED_WIDTH = "80px";
const EXPANDED_WIDTH = "280px";
const STORE_KEY = 'sidebar-toggle';
export function Sidebar({ onClick, menu, profile, onLogout }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(parseInt(localStorage.getItem(STORE_KEY) as string) || false);
    const pathname = window.location.pathname;
    const handleToggle = () => {
        const collapsed = !isCollapsed
        setIsCollapsed(collapsed)
        localStorage.setItem(STORE_KEY, collapsed ? '1' : '0');
    }
    return (
        <motion.div
            initial={isCollapsed ? "collapsed" : "expanded"}
            animate={isCollapsed ? "collapsed" : "expanded"}
            variants={{
                expanded: () => ({
                    width: EXPANDED_WIDTH,
                    transition: {
                        when: "beforeChildren"
                    }
                }),
                collapsed: () => ({
                    width: COLLAPSED_WIDTH,
                    transition: {
                        when: "afterChildren"
                    }
                })
            }}
            className={clsx(styles["sidebar"], 'bg-N900', 'h-screen', 'pt-14', 'justify-center', 'min-w-20')}>
            <div className={clsx('pb-16', isCollapsed ? '' : 'pl-7 w-[17.5rem]')}>

                {isCollapsed
                    ? <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image src={LOGO} alt='logo' width={49} height={27} className='mx-auto' />
                    </motion.div>
                    : <Image src={LOGO} alt='logo' width={120} height={50} className='transition' />
                }


                <div
                    onClick={handleToggle}
                    className={clsx('absolute', 'hover:cursor-pointer', 'top-14', isCollapsed ? 'left-[5.75rem]' : 'left-[14rem]')}>
                    <div className={clsx('p-1', 'rounded', { 'bg-N300': isCollapsed, 'bg-N75': !isCollapsed, 'bg-opacity-10': !isCollapsed })}>
                        <div>
                            {isCollapsed
                                ? <Collapse color={colors.N600} size={20} className='rotate-180' />
                                : <Collapse color={colors.N50} size={20} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-16'>
                <div className={styles.menu}>
                    <div className={`min-w-[${EXPANDED_WIDTH}]`}>
                        {menu?.map(m =>
                            <div
                                className={clsx('flex', 'flex-col', { 'mb-10': !isCollapsed, 'gap-2': isCollapsed, 'gap-4': !isCollapsed, 'pr-5': !isCollapsed, 'pl-7': !isCollapsed })}
                                key={m.sectionTitle}>
                                {!isCollapsed && <Typography color='text-N400' fontWeight='font-black'>{m.sectionTitle}</Typography>}

                                {m.menuItems.map(({ icon: Icon, label, key, onClick }) => {
                                    const isSelected = pathname === `/${key}`;
                                    
                                    return <Tooltip
                                        key={key}
                                        delayDuration={0}
                                        disableHoverableContent={!isCollapsed ? false : undefined}
                                        content={label.split(' ').pop() as string}
                                        position='right'
                                        contentClassName='ml-2'>
                                        <div
                                            className={clsx(
                                                'text-text03', 'rounded', 'hover:cursor-pointer',
                                                'mx-auto', 'flex', 'flex-col', 'items-center',
                                            )}
                                            onClick={() => onClick && onClick(key)}>

                                            <div className={clsx(
                                                'flex', 'py-[0.625rem]', 'gap-4', 'rounded', 'hover:bg-N75', 'hover:bg-opacity-10',
                                                {
                                                    'bg-N75': isSelected, 'bg-opacity-10': isSelected, 'flex-col': isCollapsed, 'flex-row': !isCollapsed, 'w-10': isCollapsed, 'mx-5': isCollapsed,
                                                    'px-3': !isCollapsed, 'px-[0.625rem]': isCollapsed
                                                })}>
                                                <div>
                                                    <Icon
                                                        size={isCollapsed ? 20 : 24}
                                                        color={isSelected ? colors.C200 : colors.N300} />
                                                </div>

                                                {!isCollapsed &&
                                                    <Typography
                                                        color={isSelected ? 'text-N0' : 'text-N400'}
                                                        fontWeight={isSelected ? 'font-black' : 'font-normal'}
                                                        className='spacing whitespace-nowrap w-[10.5rem]'>
                                                        {label}
                                                    </Typography>}
                                            </div>

                                            {isCollapsed &&
                                                <Typography
                                                    className={clsx(styles.collapsedLabel, { 'opacity-0': !isSelected })}
                                                    color='text-N0'>
                                                    {label.split(' ').pop()}
                                                </Typography>
                                            }
                                        </div>
                                    </Tooltip>

                                })}
                            </div>
                        )}
                    </div>

                    {profile
                        ? <ProfileWrapper
                            isCollapsed={Boolean(isCollapsed)}
                            onLogout={() => onLogout && onLogout()}>
                            <div className={clsx('flex row items-center', { 'hover:cursor-pointer': isCollapsed })} onClick={isCollapsed ? () => onLogout && onLogout() : undefined}>
                                <Avatar label={profile?.name?.substring(0, 1) || ''} size='sm' />
                                {!isCollapsed &&
                                    <>
                                        <div className='px-4 py-1 flex-1'>
                                            <Typography size='text-sm' fontWeight='font-black' color='text-N50'>{profile?.name}</Typography>
                                            <Typography size='text-xs' color='text-N300'>{profile?.email}</Typography>
                                        </div>

                                        <div className='py-2 text-ui-03 cursor-pointer'>
                                            <Sort size={16} />
                                        </div>
                                    </>
                                }
                            </div>
                        </ProfileWrapper>
                        : null
                    }
                </div>
            </div>
        </motion.div >
    );
}

export default Sidebar;
