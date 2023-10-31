"use client"

import { useForm } from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    HStack,
} from '@chakra-ui/react';
import { CustButton } from '../cust-button/CustButton';
import { ControlledInputGroup } from '../controlled-input-group/ControlledInputGroup';

export const CustForm = () => {
    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <ControlledInputGroup control={control} name="email" type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <ControlledInputGroup control={control} name="password" type="password" placeholder="Enter your password" />
            </FormControl>

            <HStack spacing={8} justifyContent='space-around'>
                <CustButton variant="solid" colorScheme="red" mt={4} type="submit" label="Login" />
                <CustButton variant="outline" colorScheme="red" mt={4} ml={2} label="Clear" onClick={() => reset()} />
            </HStack>
        </form>
    );
};