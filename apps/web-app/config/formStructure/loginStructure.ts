import { FormSection } from '@ui-types/input';
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Please enter a valid email email address'),
    tempPassword: yup.string().required('Please enter a password')
});

export const structure: FormSection[] = [{
    fields: [[
        { label: 'Email Address', placeholder: 'user@email', name: 'email' }
    ], [
        { label: 'Password', placeholder: '', name: 'tempPassword', inputType: 'password' }
    ]]
}];

