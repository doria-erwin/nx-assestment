import { FormSection } from '@ui-types/input';
import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email('Invalid email').required(),
    gender: yup.string(),
    password: yup.string().required('Please enter a password')
        // eslint-disable-next-line no-useless-escape
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Your password does not meet the minimum security requirements. Please input a different password.'),
    confirmPassword: yup.string().required('Please enter a confirm password')
        .oneOf([yup.ref('password'), null], 'The passwords you entered do not match. Please try again.'),
    terms: yup.bool().isTrue()
});

export const structure: FormSection[] = [{
    sectionTitle: 'Provide info',
    fields: [
        [
            { label: 'First Name', name: 'firstName' },
            { label: 'Last Name', name: 'lastName' }
        ],
        [
            { label: 'Email', name: 'email' },
            {
                label: 'Gender',
                name: 'gender',
                fieldType: 'select',
                options: [
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' }
                ],
                
            }
        ],
        [
            { label: 'Password', name: 'password', inputType: 'password' },
            { label: 'Confirm Password', name: 'confirmPassword', inputType: 'password' }
        ],
        [{ label: 'Accept Terms', name: 'terms', fieldType: 'checkbox' }],
    ]
}];

