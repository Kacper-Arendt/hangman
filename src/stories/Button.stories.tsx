import { Button } from "coreUI/items/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "black",
  value: "Cur agripeta ridetis?",
};
