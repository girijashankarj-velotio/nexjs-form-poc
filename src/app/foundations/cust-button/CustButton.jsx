import { Button, MenuIcon, PopoverArrow } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@chakra-ui/icons';
// import './button.css';

/**
 * Custom Chakra UI Button component for user interaction
 */
export const CustButton = ({ colorScheme, variant, size, label, ...props }) => {
    return (
        <Button
            leftIcon={<ChevronRightIcon />}
            colorScheme={colorScheme}
            variant={variant}
            size={size}
            {...props}
        >
            {label}
        </Button>
    );
};

CustButton.propTypes = {
    /**
     * What color scheme to use
     */
    colorScheme: PropTypes.oneOf(['gray', 'teal', 'red', 'blackAlpha']),
    /**
     * What variant to use
     */
    variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    /**
     * Button label
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

CustButton.defaultProps = {
    colorScheme: 'teal',
    variant: 'outline',
    size: 'md',
    onClick: undefined,
};
