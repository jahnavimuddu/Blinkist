import { ComponentStory } from "@storybook/react";
import { HeaderComponent } from ".";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Organisms/Header',
    component: HeaderComponent
}

const Template: ComponentStory<typeof HeaderComponent> = () => <MemoryRouter><HeaderComponent /></MemoryRouter>

export const TestComp = Template.bind({})
