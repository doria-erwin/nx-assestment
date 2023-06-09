/* eslint-disable react-hooks/exhaustive-deps */
// import { checkIfEmailExisit } from '@web-app/api/user';
import { Form, Typography } from '@ui-components';
import { loginUser } from '@web-app/api/cognito';
import PrimaryLayout from '@web-app/components/layouts/primary-layout/primary-layout';
import { schema, structure } from '@web-app/config/formStructure/loginStructure';
import useAuth from '@web-app/hooks/useAuth';
import { useAppDispatch } from '@web-app/stateManagement/hooks';
import { clearUserAuth, setTemporaryUser } from '@web-app/stateManagement/modules/authentication';
import { setFlashNotification } from '@web-app/stateManagement/modules/flashNotification';
import { NextPageWithLayout } from '@web-app/types/pages';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface LoginProps { }

export const Login: NextPageWithLayout<LoginProps> = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { authenticationUser } = useAuth();

    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [error, setError] = useState<{ [key: string]: string }>(null);

    useEffect(() => {
        dispatch(clearUserAuth());
    }, []);

    const handleSubmit = async (data: { email: string, tempPassword: string }) => {
        console.log('hey')
        setIsProcessing(true);
        
        try {
            // TODO add checking if user exist
            // await checkIfEmailExisit(data.email);

            const { result, cognitoUser } = await loginUser({ email: data.email, password: data.tempPassword });

            if (result.newPasswordRequired) {
                dispatch(setTemporaryUser({ cognitoUser, email: result.email }))
                setIsProcessing(false);

                router.push(`/auth/complete-profile?email=${result.email}`);
            } else {
                authenticationUser(data, result.idToken.jwtToken);
            }
        } catch (err) {
            setIsProcessing(false);

            // if email not found
            if (err.response?.data?.error === 'Not Found') {
                setError({
                    email: 'We could not find any account with this email address. Please check your details and try again.'
                })
                return
            }

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
                Welcome!
            </Typography>
            <Typography  className='mb-14'>
                Please enter your details to continue
            </Typography>

            <Form
                structure={structure}
                schema={schema}
                onSubmitForm={handleSubmit}
                isProcessing={isProcessing}
                data={{ email: '', tempPassword: '' }}
                resetResultError={() => setError(null)}
                resultError={error}>
                <div className='flex justify-start'>
                    <Link href='/auth/forgot-password'>
                        <Typography className='mb-3'>
                            Forgot Password?
                        </Typography>
                    </Link>
                </div>
            </Form>
        </>
    );
}

export default Login;

Login.getLayout = (page) => {
    return (
        <PrimaryLayout title='Login'>
            {page}
        </PrimaryLayout>
    );
};
