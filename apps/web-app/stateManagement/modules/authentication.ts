import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEY } from '@web-app/config/constants';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Cookies from 'js-cookie';

export type ProfileData = {
    emailAddress?: string,
    firstName?: string,
    lastName?: string,
    id?: number
};

export type AuthenticationState = {
    isAuthed: boolean,
    isLoggingOut: boolean,
    profileData?: ProfileData,
    userToken: null | string,
    temporaryUser?: CognitoUser,
}

const initialState: AuthenticationState = {
    isAuthed: false,
    isLoggingOut: false,
    profileData: {
        emailAddress: ''
    },
    userToken: null
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setTemporaryUser: (state, action: PayloadAction<{ cognitoUser: CognitoUser, email: string }>) => {
            state.temporaryUser = action.payload.cognitoUser;
            state.profileData = { emailAddress: action.payload.email };
        },
        updateUserToken: (state, action: PayloadAction<string>) => {
            state.isLoggingOut = false;
            state.userToken = action.payload;
        },
        authUser: (state, action: PayloadAction<{ accessToken: string, profileData: ProfileData }>) => {
            // state.profileData = action.payload;
            state.profileData = action.payload.profileData;
            state.userToken = action.payload.accessToken;
            state.isAuthed = true;

            Cookies.set(STORAGE_KEY.ACCESS_TOKEN, action.payload.accessToken);
        },
        updateProfileData: (state, action: PayloadAction<{ [key: string]: string }>) => {
            state.profileData = {
                ...state.profileData,
                ...action.payload
            };
        },
        setLoggingOut: (state) => {
            state.isLoggingOut = true;
            state = initialState;

            Cookies.remove(STORAGE_KEY.ACCESS_TOKEN);
        },
        clearUserAuth: (state) => {
            state = initialState;
            Cookies.remove(STORAGE_KEY.ACCESS_TOKEN);
        }
    }
});

export const {
    updateUserToken, authUser, updateProfileData, setLoggingOut, setTemporaryUser, clearUserAuth
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
