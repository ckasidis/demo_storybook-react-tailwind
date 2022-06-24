import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';
import { HiOutlineUser, HiOutlineX, HiOutlineEyeOff } from 'react-icons/hi';

export default {
	title: 'Components/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
	<TextField {...args} />
);
export const Blank = Template.bind({});
Blank.args = {};

const TemplateWithLabel: ComponentStory<typeof TextField> = (args) => (
	<ul className="flex flex-col gap-8">
		<li className="flex flex-row items-end gap-4">
			<TextField {...args} />
			<TextField label="Label" {...args} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField placeholder="Placeholder" {...args} />
			<TextField label="Label" placeholder="Placeholder" {...args} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField defaultValue={'Input'} {...args} />
			<TextField label="Label" defaultValue={'Input'} {...args} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField type={'Password'} defaultValue={'12345'} {...args} />
			<TextField
				label="Label"
				type={'Password'}
				defaultValue={'12345'}
				{...args}
			/>
		</li>
	</ul>
);

export const NormalWithLabel = TemplateWithLabel.bind({});
NormalWithLabel.args = {};

export const ErrorWithLabel = TemplateWithLabel.bind({});
ErrorWithLabel.args = {
	isValid: false,
	errorMessage: 'Error Message',
};

export const DisabledWithLabel = TemplateWithLabel.bind({});
DisabledWithLabel.args = {
	disabled: true,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateWithIcon: ComponentStory<typeof TextField> = (args) => (
	<ul className="flex flex-col gap-8">
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} {...args} />
			<TextField rightIcon={HiOutlineX} {...args} />
			<TextField leftIcon={HiOutlineUser} rightIcon={HiOutlineX} {...args} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} placeholder="Placeholder" {...args} />
			<TextField rightIcon={HiOutlineX} placeholder="Placeholder" {...args} />
			<TextField
				leftIcon={HiOutlineUser}
				rightIcon={HiOutlineX}
				placeholder="Placeholder"
				{...args}
			/>
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} defaultValue={'Input'} {...args} />
			<TextField rightIcon={HiOutlineX} defaultValue={'Input'} {...args} />
			<TextField
				leftIcon={HiOutlineUser}
				rightIcon={HiOutlineX}
				defaultValue={'Input'}
				{...args}
			/>
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField
				leftIcon={HiOutlineUser}
				type={'Password'}
				defaultValue={'12345'}
				{...args}
			/>
			<TextField
				rightIcon={HiOutlineEyeOff}
				type={'Password'}
				defaultValue={'12345'}
				{...args}
			/>
			<TextField
				leftIcon={HiOutlineEyeOff}
				rightIcon={HiOutlineX}
				type={'Password'}
				defaultValue={'12345'}
				{...args}
			/>
		</li>
	</ul>
);

export const NormalWithIcon = TemplateWithIcon.bind({});
NormalWithIcon.args = {};

export const ErrorWithIcon = TemplateWithIcon.bind({});
ErrorWithIcon.args = {
	isValid: false,
	errorMessage: 'Error Message',
};

export const DisabledWithIcon = TemplateWithIcon.bind({});
DisabledWithIcon.args = {
	disabled: true,
};
