import clsx from 'classnames';
import { Color, TypographySize, Weight } from '../../types/typography';

export interface TypographyProps {
    color?: Color,
    fontWeight?: Weight,
    size?: TypographySize,
    children: React.ReactNode | string,
    component?: 'span' | 'p',
    className?: string
}

export function Typography({
    color = 'text-N900',
    fontWeight = 'font-normal',
    size = 'text-base',
    component = 'p',
    className = '',
    children,
}: TypographyProps) {
    const Component = component ? component : 'p';

    return (
        <Component className={clsx(color, size, fontWeight, className )}>{children}</Component>
    );
}

export default Typography;
