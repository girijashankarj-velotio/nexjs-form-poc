import React from 'react';
import { InputGroup } from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { CustInput } from '../cust-input/CustInput';

export const ControlledInputGroup = React.forwardRef(({ name, control, ...rest }, ref) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: "",
        rules: {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
        }
    });

    return (
        <InputGroup>
            <CustInput
                {...field}
                ref={ref}
                {...rest}
            />
        </InputGroup>
    );
});