import { forgotPassword } from "@web-app/api/cognito";
// import { checkIfEmailExisit } from "@web-app/api/user";
import { Button, Form, Typography } from "@ui-components";
import PrimaryLayout from "@web-app/components/layouts/primary-layout/primary-layout";
import { schema, structure } from "@web-app/config/formStructure/forgotPasswordStructure";
import { useAppDispatch } from "@web-app/stateManagement/hooks";
import { setFlashNotification } from "@web-app/stateManagement/modules/flashNotification";
import { NextPageWithLayout } from "@web-app/types/pages";
import { useRouter } from "next/router";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ForgotPasswordProps { }

export const ForgotPassword: NextPageWithLayout<ForgotPasswordProps> = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [error, setError] = useState<{ [key: string]: string }>(null);

    const handleSubmit = async (data: { [key: string]: string }) => {
        setIsProcessing(true);

        try {
            // TODO add checking if user exist
            // await checkIfEmailExisit(data.email);

            await forgotPassword(data.email);
            setIsProcessing(false);
            router.push(`/auth/set-new-password?email=${data.email}`);

            dispatch(setFlashNotification({
                title: 'The OTP has been sent to your email address',
                message: 'Please check your inbox and enter the code to continue.',
                alertType: 'success'
            }))
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
                title: 'Something went wrong',
                message: 'Please check your details and try again.',
                alertType: 'error'
            }))
        }
    }

    return (
        <>
            <Typography
                className='text-center mt-14'>
                Forgot Password
            </Typography>
            <Typography
                className='mb-14 text-center'>
                Enter the email associated to your account
            </Typography>

            <Form
                structure={structure}
                schema={schema}
                data={{ email: '' }}
                onSubmitForm={handleSubmit}
                isProcessing={isProcessing}
                submitLabel='Continue'
                resultError={error}
                resetResultError={() => setError(null)} />

            <Button
                label='Back'
                onClick={router.back}
                className='w-full mt-6' />
        </>
    );
}

export default ForgotPassword;

ForgotPassword.getLayout = (page) => {
    return (
        <PrimaryLayout title='Forgot Password'>
            {page}
        </PrimaryLayout>
    );
};