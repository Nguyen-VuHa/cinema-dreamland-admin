import { FieldInputProps, FormikProps } from 'formik';
import React from 'react';

type Props = {
    field: FieldInputProps<string>,
    form: any,
    placeholder?: string,
    className?: string,
    classNameInput?: string,
    type?: string;
}

const InputFormik: React.FC<Props> = ({ className, classNameInput, field, form, type, ...props }) => {
    const { name } = field;
    const { touched, errors } = form;

    return (
        <div className={
            (className || '') + 
            ` w-full space-y-2`
        }>
            <input 
                className={ `${classNameInput || ''} w-full border-2 border-solid border-transparent
                    rounded-md shadow-0 bg-layout-second text-[white]
                    px-3 py-2
                    transition-all
                    font-text
                    focus:!border-primary
                    placeholder-input-place
                    hover:bg-hover hover:transition-all
                `}
                type={type || 'text'}
                {...field}
                {...props}
            />
            {
                touched[name] && errors[name] && <small className='text-error font-extralight italic'>
                    { errors[name]?.toString() }
                </small>
            }
        </div>
    );
};

export default InputFormik;