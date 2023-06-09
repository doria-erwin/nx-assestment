// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// import { NotAvailable } from '../../icons/NotAvailable';
import { Typography } from '../../typography/typography';

/* eslint-disable-next-line */
export interface NoAvailableProps {
    title: string,
    message: string
}

export function NoAvailable({ title, message }: NoAvailableProps) {
    return (
        <div className='text-center p-6'>
            {/* <div className='mb-5'>
                <NotAvailable size={56} secondaryColor={colors.N600} color={colors.N400} className='mx-auto' />
            </div> */}
            <Typography color='text-N800' fontWeight='font-black'>{title}</Typography>
            <Typography color='text-N700' className='mt-2 text-center whitespace-pre-line'>
                {message}
            </Typography>
        </div>
    );
}

export default NoAvailable;
