import { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Field Label
	 */
	label?: string;
	/**
	 * Type of TextField
	 */
	type?: 'text' | 'password';
	/**
	 * Displaying Icons
	 */
	icon?: '<-' | '->' | '<-->';
}

/**
 * Text Field Component for Text Input and Password
 */
export const TextField = ({
	label,
	type = 'text',
	icon,
	...props
}: TextFieldProps) => {
	return (
		<label>
			{label}
			<br />
			<input
				type={type}
				{...props}
				className="shadow-[0_0_10px_rgba(0,0,0,0.1)]"
			/>
		</label>
	);
};
