import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertType } from '@ui-types/alert';

export type FlashNotificationState = {
    title: string,
    message: string,
    alertType?: AlertType,
    duration?: number
}

const initialState: FlashNotificationState = {
    title: '',
    message: '',
    alertType: 'info',
    duration: 3000
};

export const flashNotificationSlice = createSlice({
    name: 'flashNotification',
    initialState,
    reducers: {
        setFlashNotification: (state, action: PayloadAction<FlashNotificationState>) => ({
            ...state,
            ...action.payload
        }),
        clearFlashMessage: (state) => ({
            ...initialState
        })
    }
});

export const { setFlashNotification, clearFlashMessage } = flashNotificationSlice.actions;

export default flashNotificationSlice.reducer;
