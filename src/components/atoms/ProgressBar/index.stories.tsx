import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from ".";
// import baseTheme from "../../../theme/ButtonTheme/buttonTheme";
const ProgressBarComponent = {
  title: "atoms/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

export const Template: ComponentStory<typeof ProgressBar> = (args: any) => (
  <ProgressBar {...args} />
);

Template.args = {
  value: 60,
  color: "success",
//   theme: baseTheme,
};

export default ProgressBarComponent;
