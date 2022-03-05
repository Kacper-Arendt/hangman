import { Button } from "coreUI";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  variant: "black",
  value: "Cur agripeta ridetis?",
};
