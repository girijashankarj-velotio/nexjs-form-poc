import { Flex, Box, Heading } from '@chakra-ui/react';
import { CustForm } from '../cust-form/CustForm';

const LoginPage = () => {
    return (
        <Flex
            align="center"
            justify="center"
            height="100vh"
        >
            <Box width={{ base: '90%', md: '70%', lg: '50%' }} p={4}>
                <Heading mb={8} textAlign="center">
                    Login Page
                </Heading>
                <CustForm />
            </Box>
        </Flex>
    );
};

export default LoginPage;