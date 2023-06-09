import { Form, Typography } from '@ui-components';
import { completeNewPasswordChallenge } from '@web-app/api/cognito';
import PrimaryLayout from '@web-app/components/layouts/primary-layout/primary-layout';
import { schema, structure } from '@web-app/config/formStructure/createAccountStructure';
import useAuth from '@web-app/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@web-app/stateManagement/hooks';
import { setFlashNotification } from '@web-app/stateManagement/modules/flashNotification';
import { NextPageWithLayout } from '@web-app/types/pages';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface CompleteProfileProps { }

export const CompleteProfile: NextPageWithLayout<CompleteProfileProps> = () => {
    const dispatch = useAppDispatch();
    const { authenticationUser } = useAuth();
    const { profileData, temporaryUser } = useAppSelector(({ authentication }) => authentication);

    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleSubmit = async (data: { [key: string]: string }) => {
        setIsProcessing(true);

        try {
            const { password, lastName, firstName } = data;
            const result = await completeNewPasswordChallenge(temporaryUser, password);
            authenticationUser({
                email: profileData?.emailAddress,
                firstName,
                lastName
            }, result.idToken.jwtToken, true);
        } catch (err) {
            setIsProcessing(false);
            dispatch(setFlashNotification({
                title: 'Your email address or password is incorrect',
                message: 'Please check your details and try again.',
                alertType: 'error'
            }))
        }
    }

    return (
        <>
            <Typography >
                Complete your profile
            </Typography>
            <Typography className='mb-14'>
                Please enter your details below
            </Typography>

            <Form
                structure={structure}
                schema={schema}
                onSubmitForm={handleSubmit}
                isProcessing={isProcessing}
                data={{
                    email: profileData?.emailAddress,
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: ''
                }} />
        </>
    );
}

export default CompleteProfile;

CompleteProfile.getLayout = (page) => {
    return (
        <PrimaryLayout title='Complete Your Profile'>
            {page}
        </PrimaryLayout>
    );
};