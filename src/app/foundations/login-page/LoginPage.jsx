import { Box, Heading } from '@chakra-ui/react';
import { CustForm } from '../cust-form/CustForm';

const LoginPage = () => {
    return (
        <Box className="cust-login-page" width={{ base: '90%', md: '70%', lg: '50%' }} p={4} borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading mb={8} textAlign="center">
                Login Page
            </Heading>
            <CustForm />
        </Box>
    );
};

export default LoginPage;