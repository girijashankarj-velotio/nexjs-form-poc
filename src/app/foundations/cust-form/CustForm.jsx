"use client"

import { useForm } from 'react-hook-form';
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    HStack,
} from '@chakra-ui/react';
import { CustButton } from '../cust-button/CustButton';
import { ControlledInputGroup } from '../controlled-input-group/ControlledInputGroup';

export const CustForm = () => {
    const { control, handleSubmit, reset, formState: { errors, isSubmitting }, setError } = useForm();

    const onSubmit = (data) => {
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    const onError = (errors, e) => {
        console.log("Custom Form Handle Error");
    }

    console.log("CM", errors)

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormControl isRequired isInvalid={errors.password}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <ControlledInputGroup
                    control={control}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel htmlFor='password'>Password</FormLabel>
                <ControlledInputGroup
                    control={control}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>

            <HStack spacing={8} justifyContent='space-around'>
                <CustButton variant="solid" colorScheme="red" mt={4} type="submit" label="Login" isLoading={isSubmitting} />
                <CustButton variant="outline" colorScheme="red" mt={4} ml={2} label="Clear" onClick={() => reset()} />
            </HStack>
        </form>
    );
};