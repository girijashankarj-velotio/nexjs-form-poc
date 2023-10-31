import { CustInput } from "../../app/foundations/cust-input/CustInput";

export default {
    title: 'Foundations/CustInput',
    component: CustInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export const Default = {
    args: {
        placeholder: 'Default Placeholder',
    },
};

export const Outline = {
    args: {
        placeholder: 'Outline Placeholder',
        variant: 'outline',
        size: 'sm',
    },
};

export const Unstyled = {
    args: {
        placeholder: 'Unstyled Placeholder',
        variant: 'unstyled',
        size: 'xs',
    },
};

export const Flushed = {
    args: {
        placeholder: 'Flused Placeholder',
        variant: 'flused',
        size: 'md',
    },
};

export const Filled = {
    args: {
        placeholder: 'Filled Placeholder',
        variant: 'filled',
        size: 'lg',
    },
};
