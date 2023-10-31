"use client"

import { useForm, Controller } from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    InputGroup,
} from '@chakra-ui/react';
import { CustButton } from '../cust-button/CustButton';
import { CustInput } from '../cust-input/CustInput';

export const CustForm = () => {
    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <InputGroup>
                            <CustInput {...field} type="email" placeholder="Enter your email" />
                        </InputGroup>
                    )}
                />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <InputGroup>
                            <CustInput {...field} type="password" placeholder="Enter your password" />
                        </InputGroup>
                    )}
                />
            </FormControl>

            <CustButton colorScheme="teal" mt={4} type="submit" label="Login" />

            <CustButton colorScheme="gray" mt={4} ml={2} label="Clear" onClick={() => reset()} />
        </form>
    );
};