import { ComponentStory } from "@storybook/react";
import { ExtendedNav } from "./index";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Organisms/Extended Nav',
    component: ExtendedNav
}

const Template: ComponentStory<typeof ExtendedNav> = () => <MemoryRouter><ExtendedNav /></MemoryRouter>

export const ExtNav = Template.bind({})
ExtNav.args = {
    
}