import { Story } from "@storybook/react";
import { MyLibrary, MyLibraryProps } from ".";
import {HeaderComponent} from '../../organisms/Header'
import {Footer} from '../../organisms/Footer'
import { Tabs } from "../../organisms/Tabs";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/My Library',
    component: MyLibrary
}

let Template: Story<MyLibraryProps> = args => <MemoryRouter><MyLibrary {...args} /></MemoryRouter>

export const MyLibraryTest = Template.bind({})
MyLibraryTest.args = {
    header: <HeaderComponent />,
    body: <Tabs />,
    footer: <Footer />
}

