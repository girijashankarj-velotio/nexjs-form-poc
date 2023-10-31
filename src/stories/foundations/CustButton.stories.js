import { CustButton } from "../../app/foundations/cust-button/CustButton";

// export default {
//     title: 'Foundations/CustButton',
//     component: CustButton,
//     tags: ['autodocs'],
//     parameters: {
//         layout: 'fullscreen',
//     },
// };

// export const Default = () => {
//     return <CustButton></CustButton>
// }

// export const Outlined = ({ variant, colorScheme }) => {
//     return <CustButton variant={variant} colorScheme={colorScheme} />
// }

export default {
    title: 'Foundations/CustButton',
    component: CustButton,
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
        label: 'Default Button',
    },
};

export const Solid = {
    args: {
        colorScheme: 'red',
        variant: 'solid',
        label: 'Solid Button',
        size: 'xs',
    },
};

export const Outline = {
    args: {
        colorScheme: 'blackAlpha',
        variant: 'outline',
        label: 'Solid Button',
        size: 'sm',
    },
};

export const Ghost = {
    args: {
        colorScheme: 'teal',
        variant: 'ghost',
        label: 'Ghost Button',
        size: 'md',
    },
};

export const Link = {
    args: {
        colorScheme: 'gray',
        variant: 'link',
        label: 'Link Button',
        size: 'lg',
    },
};
