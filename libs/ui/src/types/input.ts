export type FieldType = 'input' | 'textarea' | 'select' | 'checkbox';
    // upload = 'upload',
    // select = 'select',
    // multiInputs = 'multiInputs',
    // colorPicker = 'colorPicker',
    // multiSelect = 'multiSelect',
    // nestedDropdown = 'nestedDropdown',
    // nestedMultiSelect = 'nestedMultiSelect'
// }

export type FormSection = {
    sectionTitle?: string,
    fields: FormStructureItem[][]
}

export type InputType = 'text' | 'password' | 'number'//  | 'email' | 'datetime' | 'datetime-local' | 'date' | 'month' | 'time' | 'week' | 'email' | 'url' | 'search' | 'tel' | 'color'

export type FormStructureItem = {
    value?: string | number | boolean;
    label: string,
    name: string,
    fieldType?: FieldType,
    inputType?: InputType,
    // portion: 2 | 4 | 6 | 12,
    maxLength?: number,
    options?: { value: string | number, label: string }[],
    placeholder?: string,
    disabled?: boolean,
    extra?: string | React.ReactNode,

    isSpacer?: boolean
}

