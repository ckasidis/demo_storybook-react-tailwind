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

const TemplateWithLabel: ComponentStory<typeof TextField> = () => (
	<ul className="flex flex-col gap-8">
		<li className="flex flex-row items-end gap-4">
			<TextField />
			<TextField label="Label" />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField placeholder="Placeholder" />
			<TextField label="Label" placeholder="Placeholder" />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField defaultValue={'Input'} />
			<TextField label="Label" defaultValue={'Input'} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField type={'Password'} defaultValue={'12345'} />
			<TextField label="Label" type={'Password'} defaultValue={'12345'} />
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
const TemplateWithIcon: ComponentStory<typeof TextField> = () => (
	<ul className="flex flex-col gap-8">
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} />
			<TextField rightIcon={HiOutlineX} />
			<TextField leftIcon={HiOutlineUser} rightIcon={HiOutlineX} />
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} placeholder="Placeholder" />
			<TextField rightIcon={HiOutlineX} placeholder="Placeholder" />
			<TextField
				leftIcon={HiOutlineUser}
				rightIcon={HiOutlineX}
				placeholder="Placeholder"
			/>
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField leftIcon={HiOutlineUser} defaultValue={'Input'} />
			<TextField rightIcon={HiOutlineX} defaultValue={'Input'} />
			<TextField
				leftIcon={HiOutlineUser}
				rightIcon={HiOutlineX}
				defaultValue={'Input'}
			/>
		</li>
		<li className="flex flex-row items-end gap-4">
			<TextField
				leftIcon={HiOutlineUser}
				type={'Password'}
				defaultValue={'12345'}
			/>
			<TextField
				rightIcon={HiOutlineEyeOff}
				type={'Password'}
				defaultValue={'12345'}
			/>
			<TextField
				leftIcon={HiOutlineEyeOff}
				rightIcon={HiOutlineX}
				type={'Password'}
				defaultValue={'12345'}
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
