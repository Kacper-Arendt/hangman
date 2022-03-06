import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from '../coreUI';

export default {
	title: 'Form',
	component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const form = Template.bind({});
form.args = {
	email: true,
	name: true,
	buttonValue: 'Login',
	onSubmit: () => {},
	linkPath: '/register',
	linkValue: 'Register',
	linkText: 'Need an account?',
};
