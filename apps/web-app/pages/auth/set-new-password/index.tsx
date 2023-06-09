import { Form, Typography } from "@ui-components";
import { resendConfirmationCode, verifyAndSetPassword } from "@web-app/api/cognito";
import PrimaryLayout from "@web-app/components/layouts/primary-layout/primary-layout";
import { schema, structure } from "@web-app/config/formStructure/setNewPassword";
import { useCountdown } from "@web-app/hooks/useCountdown";
import { useAppDispatch } from "@web-app/stateManagement/hooks";
import { setFlashNotification } from "@web-app/stateManagement/modules/flashNotification";
import { NextPageWithLayout } from "@web-app/types/pages";
import { useRouter } from "next/router";
import { useState } from "react";

/* eslint-disable-next-line */
export interface SetNewPasswordProps { }

export const SetNewPassword: NextPageWithLayout<SetNewPasswordProps> = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { countdown, startCounting, isCounting } = useCountdown();

    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [error, setError] = useState<{ [key: string]: string }>(null);

    const handleSubmit = async (data: { [key: string]: string }) => {
        setIsProcessing(true);

        try {
            const { email } = router.query;

            await verifyAndSetPassword(
                data.verificationCode,
                data.password,
                email as string);

            setIsProcessing(false);
            router.replace('/auth/login');

            dispatch(setFlashNotification({
                title: 'Successfully set new password',
                message: 'Please login using your new password.',
                alertType: 'success'
            }))
        } catch (err) {
            setIsProcessing(false);

            if (err.code === 'CodeMismatchException') {
                setError({
                    email: 'The OTP you entered is incorrect. Please check the code and try again.'
                })
                return
            }

            dispatch(setFlashNotification({
                title: 'Failed to set new password',
                message: err.message,
                alertType: 'error',
                duration: 4000
            }))
        }
    }

    const handleRequestNew = async () => {
        startCounting();

        try {
            await resendConfirmationCode(router.query.email as string);

            dispatch(setFlashNotification({
                title: 'New OTP has been sent to your email address',
                message: 'Please check your inbox and enter the code to continue.',
                alertType: 'success'
            }))
        } catch (err) {
            dispatch(setFlashNotification({
                title: 'The OTP you entered is incorrect',
                message: 'Please check the code and try again.',
                alertType: 'error'
            }))
        }
    }

    structure[0].fields[0][0]['extra'] = <div className='flex flex-row items-center'>
        <Typography className='p-1'>{'Didn’t receive a code?'}</Typography>
        <Typography className='w-12'>
            {isCounting
                ? countdown
                : <span onClick={handleRequestNew} className='cursor-pointer'>
                    Resend
                </span>
            }
        </Typography>
    </div>

    return (
        <div className='flex justify-center items-center h-screen w-screen overflow-auto scrollbar-hide'>
            <div className='w-[28rem] pb-3'>
                <Typography
                    className='text-center mx-14'>
                    Set new password
                </Typography>

                <Form
                    structure={structure}
                    schema={schema}
                    onSubmitForm={handleSubmit}
                    isProcessing={isProcessing}
                    submitLabel='Reset Password'
                    resultError={error}
                    resetResultError={() => setError(null)}
                    data={{ confirmPassword: '', password: '' }} />
            </div>
        </div>
    );
}

export default SetNewPassword;

SetNewPassword.getLayout = (page) => {
    return (
        <PrimaryLayout title='Set New Password'>
            {page}
        </PrimaryLayout>
    );
};