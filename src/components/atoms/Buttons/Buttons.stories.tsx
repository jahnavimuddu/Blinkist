// import { Buttons } from "./Buttons"
// import { ComponentMeta, ComponentStory } from "@storybook/react";
// import { ThemeProvider, createTheme, Typography } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';



// const theme = createTheme({
//     components: {
//       MuiTypography: {
//         styleOverrides: {
//           root: {
//             fontFamily: "Cera Pro",
//             fontSize: "16px",
//             fontWeight: "400px",
//             textTransform: "none",
//           },
//         },
//       },
//     },
//   });


// export default{
//     title:'Molecules/Button',
//     component: Buttons,
//     argTypes:{
//         onClick:{action:'clicked'}
//     }
// }as ComponentMeta<typeof Buttons>;

// const Template: ComponentStory<typeof Buttons> = (args) => (
//     <ThemeProvider theme={theme}>
//         <Buttons {...args}/>
//     </ThemeProvider>
// )

// export const connectButton = Template.bind({})
// connectButton.args={ 
//     children: (
//         <Typography variant="body1" sx={{color: "#03314B"}}>Connect</Typography>
//     ),   
//     style:{
//       width : "296px",
//       height: "44px",
//       backgroundColor: "rgba(44, 224, 128, 1)",
//       borderRadius: "4px",
//       border: "none",     
//     },  
// }


// export const addLibrary = Template.bind({})
// addLibrary.args={ 
    
//     children: (
//         <Typography variant="body1" sx={{color: "#03314B"}}>Add to library</Typography>
//     ),    
//     style:{
//       width:"284px",
//       height:"52px",
//       backgroundColor:"#FFFFFF",
//       border:"1px solid #E1ECFC",
//       borderRadius:"0px 0px 8px 8px",     
//     },
//     startIcon:<AddIcon />
    
// }

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