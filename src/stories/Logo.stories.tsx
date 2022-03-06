import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '../coreUI';

export default {
	title: 'Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const logo = Template.bind({});
