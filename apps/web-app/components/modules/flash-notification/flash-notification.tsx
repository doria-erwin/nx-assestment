import { Alert } from '@ui-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../stateManagement/hooks';
import { clearFlashMessage } from '../../../stateManagement/modules/flashNotification';

/* eslint-disable-next-line */
export interface FlashNotificationProps { }

export function FlashNotification(props: FlashNotificationProps) {
    const { message, alertType, title, duration } = useAppSelector(({ flashNotification }) => flashNotification);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                dispatch(clearFlashMessage());
            }, duration);
        }
    }, [message, duration, dispatch]);

    const handleClose = () => {
        dispatch(clearFlashMessage());
    }

    return (
        <div className='absolute bottom-14 left-14 drop-shadow-elevation-03' >
            <AnimatePresence initial={false}>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    >
                        <Alert
                            type={alertType}
                            title={title}
                            description={message}
                            onClick={() => handleClose()} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FlashNotification;
