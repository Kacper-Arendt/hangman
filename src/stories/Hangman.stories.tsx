import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hangman } from '../coreUI';

export default {
	title: 'Hangman',
	component: Hangman,
} as ComponentMeta<typeof Hangman>;

const Template: ComponentStory<typeof Hangman> = (args) => <Hangman {...args} />;

export const input = Template.bind({});
