import { ComponentStory } from "@storybook/react";
import { Footer } from ".";

export default {
    title: 'Organisms/Footer',
    component: Footer
}

let Template: ComponentStory<typeof Footer> = () => <Footer />

export const FooterComponent = Template.bind({})
FooterComponent.args = {
    test: "hi"
}