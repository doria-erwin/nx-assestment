/* eslint-disable no-prototype-builtins */
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSection, FormStructureItem } from '@ui-types/input';
import clsx from 'classnames';
import { Fragment, ReactNode } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, DeepPartial, FieldPath, Path, SubmitHandler, UseFormStateReturn, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import Typography from '../../typography/typography';
import Button from '../button/button';
import Checkbox from '../checkbox/checkbox';
import Dropdown from '../dropdown/dropdown';
import Input from '../input/input';

export interface FormProps<T> {
    className?: string;
    data?: DeepPartial<T>;
    structure: FormSection[];
    /**
     * For reference, here is yup docs https://github.com/jquense/yup
     */
    schema: AnyObjectSchema;
    onSubmitForm: (data: T) => void;

    isProcessing?: boolean;
    /**
     * Error check after submission
     */
    resultError?: { [key: string]: string };
    resetResultError?: () => void,

    children?: ReactNode;

    submitLabel?: string
}
// eslint-disable-next-line @typescript-eslint/ban-types
export const Form = <T extends {}>({
    structure, isProcessing, resultError, resetResultError, data, children,
    submitLabel = 'Submit', onSubmitForm, schema
}: FormProps<T>) => {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    
    const { control, handleSubmit, formState: { errors } } = useForm<T>({
        defaultValues: data,
        resolver: yupResolver(schema),
    });

    console.log({errors})

    const onSubmit: SubmitHandler<T> = onSubmitForm;

    const renderInputControl = ({ field: { onChange, value }, fieldState: { error } }:  {
        field: ControllerRenderProps<T, Path<T>>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<T>;
    }, col: FormStructureItem) => {
        switch (col.fieldType) {
            case 'select':
                return <Dropdown
                    label={col.label}
                    listItem={col.options}
                    placeholder={col.placeholder}
                    emitSelected={onChange} />
            case 'checkbox':
                return <Checkbox
                    label={col.label}
                    isChecked={col.value as boolean}
                    onClick={(event) => {
                        onChange(event)
                        resultError?.hasOwnProperty(col.name) && resetResultError && resetResultError()
                    }}
                    error={error?.message || resultError?.[col.name] || ''} />
            default:
                return <Input
                    label={col.label}
                    value={value as unknown as string}
                    placeholder={col.placeholder}
                    type={col.inputType || 'text'}
                    // component={col.fieldType === 'textarea' ? 'textarea' : 'input'}
                    helperText={error?.message || resultError?.[col.name] || ''}
                    variant={(col.disabled || isProcessing)
                        ? 'disabled'
                        : error?.message ? 'error' : 'default'}
                    emitTextChange={(event) => {
                        onChange(event)
                        resultError?.hasOwnProperty(col.name) && resetResultError && resetResultError()
                    }} />
        }
    }

  return (
    <form 
        className={clsx('flex', 'flex-col', 'mx-auto')}
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
            {structure.map((sec, s) => (
                <Fragment key={`sec-${s}`}>
                    {sec.sectionTitle && (
                        <Typography
                            // size={TypographySize['text-xl']}
                            // fontWeight={Weight['font-bold']}
                            className={clsx('mb-4', { 'mt-6': !!s })}
                        >
                            {sec.sectionTitle}
                        </Typography>
                    )}

                    {sec.fields.map((row, r) => (
                        <div className="flex gap-3" key={`row-${r}`}>
                            {row.map((col: FormStructureItem, c) =>
                                col.isSpacer
                                    ? <div className="flex-1" key={`col-${c}`} />
                                    : <div className="pt-6 pb-2 flex-1 relative" key={`col-${c}`} >
                                        <Controller
                                            control={control}
                                            name={col.name as FieldPath<T>}
                                            // name={col.name}
                                            // eslint-disable-next-line no-prototype-builtins
                                            // defaultValue={data && data.hasOwnProperty(col.name) ? data[col.name] : null}
                                            render={props => renderInputControl(props, col)} />
                                        {col.extra}
                                    </div>
                            )}
                        </div>
                    ))}
                </Fragment>
            ))}

            {children}

            <Button
                label={submitLabel}
                type='submit'
                disabled={isProcessing}
                className='w-full'
                isProcessing={isProcessing}
            />
        </div>
    </form>
  );
}

export default Form