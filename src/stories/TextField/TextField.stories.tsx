import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
	title: 'Components/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
	<TextField {...args} />
);

export const Blank = Template.bind({});
Blank.args = {};

export const BlankWithLabel = Template.bind({});
BlankWithLabel.args = {
	label: 'Label',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
	placeholder: 'Placeholder',
};

export const PlaceholderWithLabel = Template.bind({});
PlaceholderWithLabel.args = {
	label: 'Label',
	placeholder: 'Placeholder',
};

export const Input = Template.bind({});
Input.args = {
	placeholder: 'Placeholder',
	defaultValue: 'Input',
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
	label: 'Label',
	placeholder: 'Placeholder',
	defaultValue: 'Input',
};

export const Password = Template.bind({});
Password.args = {
	type: 'password',
	placeholder: 'Placeholder',
	defaultValue: '12345',
};

export const PasswordWithLabel = Template.bind({});
PasswordWithLabel.args = {
	label: 'Label',
	type: 'password',
	placeholder: 'Placeholder',
	defaultValue: '12345',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
