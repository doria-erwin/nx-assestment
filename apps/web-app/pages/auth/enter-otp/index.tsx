import { Button, Typography } from '@ui-components';
import { resendConfirmationCode } from '@web-app/api/cognito';
import { useCountdown } from '@web-app/hooks/useCountdown';
import { setFlashNotification } from '@web-app/stateManagement/modules/flashNotification';
import clsx from 'classnames';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

/* eslint-disable-next-line */
export interface EnterOTPProps { }

let currentOTPIndex = 0;
export function EnterOTP(props: EnterOTPProps) {
    const router = useRouter();
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const { countdown, startCounting, isCounting } = useCountdown();

    const [isError, setIsError] = useState<boolean>(false);
    // const [error, setError] = useState<{ [key: string]: string }>();

    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

    useEffect(() => {
        inputRef.current?.focus();
        setIsError(false);
    }, [activeOTPIndex]);

    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        const newOtp: string[] = [...otp];
        const val = value.substring(value.length - 1);

        // check if value entered is number
        // prevent setting of otp if value is e.+
        const isNumber = /[0-9]/.test(val);

        newOtp[currentOTPIndex] = isNumber ? val : '';

        setActiveOTPIndex(!val ? currentOTPIndex - 1 : isNumber ? currentOTPIndex + 1 : currentOTPIndex);
        setOtp(newOtp);
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOTPIndex = index;

        if (e.key === 'Backspace') {
            setActiveOTPIndex(currentOTPIndex - 1);
        }
    }

    const handleVerify = () => {
        if (otp.includes('')) {
            setIsError(true);
            return;
        }

        router.push(`/auth/set-new-password?email=${router.query.email}&verificationCode=${otp.join('')}`);
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

    return (
        <div className='flex justify-center items-center h-screen w-screen overflow-auto scrollbar-hide'>
            <div className='w-[28rem] pb-3 mt-10'>
                <Typography
                    className='text-center mt-14'>
                    Check your email
                </Typography>
                <Typography
                    className='mb-14 text-center'>
                    We sent you a verification code to reset your password
                </Typography>

                <div className='flex flex-row gap-4 justify-center'>
                    {otp.map((_, index) =>
                        <input
                            key={index}
                            ref={activeOTPIndex === index ? inputRef : null}
                            type='phone'
                            className={clsx(
                                'spin-button-none', 'border', 'border-ui-04', 'focus:border-primary',
                                'h-20', 'w-[3.8687rem]', 'text-3xl', 'text-center', 'outline-none', 'transition',
                                { 'border-primary': !!otp[index] && !isError, 'border-support-error': isError }
                            )}
                            onChange={handleOnChange}
                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                            value={otp[index]}
                        />
                    )}
                </div>

                <Button
                    label='verify'
                    className='mt-[4.5rem] w-full'
                    onClick={handleVerify} />

                <div className='flex flex-row justify-center items-center mt-14'>
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
            </div>
        </div>
    );
}

export default EnterOTP;
