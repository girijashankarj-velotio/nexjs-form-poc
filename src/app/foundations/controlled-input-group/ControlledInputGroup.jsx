import React from 'react';
import { InputGroup } from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { CustInput } from '../cust-input/CustInput';

export const ControlledInputGroup = React.forwardRef(({ name, control, ...rest }, ref) => {
    const { field } = useController({
        name,
        control,
        // defaultValue: "",
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