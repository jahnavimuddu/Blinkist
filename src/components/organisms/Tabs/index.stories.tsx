import { ComponentStory } from "@storybook/react";
import {Tabs} from ".";
import {MemoryRouter} from 'react-router-dom'


export default {
    title: 'Organisms/Tabs',
    component: Tabs
}

let Template: ComponentStory<typeof Tabs> = () =><MemoryRouter> <Tabs /></MemoryRouter>

export const TabComponent = Template.bind({})
TabComponent.args = {

}