import { Input } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Chakra UI Input component for user interaction
 */
export const CustInput = ({ placeholder, variant, size, htmlSize, width, ...props }) => {
    return (
        <Input
            placeholder={placeholder}
            variant={variant}
            size={size}
            htmlSize={htmlSize}
            width={width}
            {...props}
        />
    );
};

CustInput.propTypes = {
    /**
     * What placeholder Input component should show
     */
    placeholder: PropTypes.string,
    /**
     * What variant to use
     */
    variant: PropTypes.oneOf(['outline', 'unstyled', 'flushed', 'filled']),
    /**
     * How large should the input be?
     */
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    /**
     * If you want to use the native DOM size attribute you can use the htmlSize prop. For it to work as expected you will also need to provide the width prop set to auto.
     */
    htmlSize: PropTypes.number,
    /**
    * If you want to use the native DOM size attribute you can use the htmlSize prop. For it to work as expected you will also need to provide the width prop set to auto.
    */
    wdith: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

CustInput.defaultProps = {
    placeholder: 'Default Placeholder',
    variant: 'outline',
    size: 'md',
    htmlSize: null,
    width: 'auto',
    onClick: undefined,
};
