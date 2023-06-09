import cn from 'classnames';
import Dropdown from "../formControls/dropdown/dropdown";
import { Logout } from "../icons";
import Tooltip from "../tooltip/tooltip";

interface IProfileWrapper {
    isCollapsed: boolean,
    onLogout: () => void,
    children: JSX.Element
}
const ProfileWrapper = ({ isCollapsed, onLogout, children }: IProfileWrapper) => {
    return (
        <div className={cn('mb-9', { 'mx-auto': isCollapsed })}>
            {
                isCollapsed
                    ? <Tooltip
                        content={'Logout'}
                        delayDuration={0}
                        position='right'
                        contentClassName='ml-8 -mt-0.5'>
                        {children}
                    </Tooltip>
                    : <Dropdown
                        listItem={[{ value: 'Logout', label: 'Logout', icon: Logout }]}
                        emitSelected={onLogout}
                        dropPosition='top'
                        className={cn({ 'pr-5': !isCollapsed, 'pl-7': !isCollapsed })}
                        contentClassName='w-[14.5rem]'
                        componentTrigger={children} />

            }
        </div>
    );
}

export default ProfileWrapper;
