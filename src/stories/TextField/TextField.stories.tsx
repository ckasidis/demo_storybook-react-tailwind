import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
	title: 'Components/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
	<ul className="flex flex-col gap-4">
		<li className="flex flex-row gap-4 items-end">
			<TextField {...args} />
			<TextField label="Label" {...args} />
		</li>
		<li className="flex flex-row gap-4 items-end">
			<TextField isValid={false} errorMessage="Error Message" {...args} />
			<TextField
				label="Label"
				isValid={false}
				errorMessage="Error Message"
				{...args}
			/>
		</li>
	</ul>
);

export const Blank = Template.bind({});
Blank.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
	placeholder: 'Placeholder',
};

export const Input = Template.bind({});
Input.args = {
	placeholder: 'Placeholder',
	defaultValue: 'Input',
};

export const Password = Template.bind({});
Password.args = {
	type: 'password',
	placeholder: 'Placeholder',
	defaultValue: '12345',
};

export const BlankWithLabel = Template.bind({});
BlankWithLabel.args = {
	label: 'Label',
};
