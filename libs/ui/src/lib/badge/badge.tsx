import cn from 'classnames';
import styles from './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps {
  children: string,
  variant?: 'cyan' | 'cornflower' | 'lightGreen' | 'neutral' | 'violet' | 'turquoise' | 'orange' | 'pink' | 'error',
  isRounded?: boolean,
  isDot?: boolean
}

export function Badge({ children, variant = 'neutral', isRounded, isDot }: BadgeProps) {

  if (isDot) {
    return <div className='bg-R400 h-[0.375rem] w-[0.375rem] rounded-full' />;
  }

  return (
    <div>
      <div className={cn(styles.badge, 'h-5', 'px-2', styles[variant], isRounded ? 'rounded-full' : 'rounded')}>
        <p className='antialiased'>
          {children}
        </p>
      </div>
    </div>
  );
}

export default Badge;
