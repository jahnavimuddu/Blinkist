import { Story } from "@storybook/react";
import { ButtonComponent, ButtonIconProps } from "./Buttons";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
    title: "Atoms/Buttons",
    component: ButtonComponent
}

const Template: Story<ButtonIconProps> = args => <ButtonComponent {...args} />

export const AddToLibraryButtonHoverState = Template.bind({})
AddToLibraryButtonHoverState.args = {
    variant: 'contained',
    startIcon: <AddIcon />,
    style: {
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'
    },
    children: 'Add to library'
}

export const AddToLibraryButtonRestingState = Template.bind({})
AddToLibraryButtonRestingState.args = {
    variant: 'outlined',
    startIcon: <AddIcon />,
    style: {
        color: '#0365F2',
        textTransform: 'none',
        border: 'none'
    },
    children: 'Add to library'
}

export const FinishedReadingResting = Template.bind({})
FinishedReadingResting.args = {
    variant: 'contained',
    style: {
        backgroundColor: '#2CE080',
        fontFamily: 'Cera Pro',
        color: '#03314B',
        padding: '12px 24px 12px 24px',
        textTransform: 'none',
        borderRadius: '4px'
    },
    children: 'Finished Reading'
}

export const ReadNow = Template.bind({})
ReadNow.args = {
    variant: 'outlined',
    style: {
        fontFamily: 'Cera Pro',
        color: '#2CE080',
        padding: '12px 24px 12px 24px',
        textTransform: 'none',
        borderRadius: '4px',
        border: '1px solid lightgray'
    },
    children: 'Read now'
}

export const SendToKindle = Template.bind({})
SendToKindle.args = {
    variant: 'text',
    style: {
        color: '#6D787E',
        textTransform: 'none',
        padding: '12px 24px 12px 24px'
    },
    endIcon: <ArrowForwardIcon />,
    children: 'Send to Kindle'
}

export const ConnectResting = Template.bind({})
ConnectResting.args = {
    variant: 'contained',
    style: {
        backgroundColor: '#2CE080',
        color: '#03314B',
        fontFamily: 'Cera Pro',
        textTransform: 'none',
        padding: '12px 116px 12px 116px',
    },
    children: 'Connect'
}

export const ConnectHover = Template.bind({})
ConnectHover.args = {
    variant: 'contained',
    style: {
        backgroundColor: '#00C263',
        color: '#03314B',
        fontFamily: 'Cera Pro',
        textTransform: 'none',
        padding: '12px 116px 12px 116px',
    },
    children: 'Connect'
}