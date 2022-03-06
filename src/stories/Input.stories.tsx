import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../coreUI';

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
	bgColor: 'white',
	title: 'Login',
	btnType: 'button',
};
