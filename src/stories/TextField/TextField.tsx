import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UserIcon } from '@heroicons/react/outline';

/**
 * Text Field Input for Text Input and Password
 */
interface TextFieldProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	/**
	 * Text Field Label
	 */
	label?: string;
	/**
	 * If false, the Error Message will be displayed
	 */
	isValid?: boolean;
	/**
	 * Error Message
	 */
	errorMessage?: string;
	/**
	 * Display leftIcon
	 */
	leftIcon?: boolean;
}

/**
 * Text Field Input for Text Input and Password
 */
export const TextField = ({
	label,
	isValid = true,
	errorMessage,
	leftIcon = true,
	...props
}: TextFieldProps) => {
	return (
		<div>
			{label ? (
				<label className="text-sm leading-5">
					{label}
					<div className="relative mt-1">
						{leftIcon && (
							<UserIcon className="absolute left-[19.33px] top-[15px] h-[14px]" />
						)}
						<input
							{...props}
							className={`h-[44px] pl-[42px] pr-3 px-4 ${
								isValid ? '' : 'border border-error-500'
							} rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.1)] focus:outline-none focus:border focus:border-selection-100 text-sm placeholder-[#999999]`}
						/>
					</div>
				</label>
			) : (
				<div className="relative">
					{leftIcon && (
						<UserIcon className="absolute left-[19.33px] top-[15px] h-[14px]" />
					)}
					<input
						{...props}
						className={`h-[44px] pl-[42px] pr-3 px-4 ${
							isValid ? '' : 'border border-error-500'
						} rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.1)] focus:outline-none focus:border focus:border-selection-100 text-sm placeholder-[#999999]`}
					/>
				</div>
			)}
			{!isValid && errorMessage && (
				<p className="mt-1 text-xs text-error-500 leading-[18px]">
					{errorMessage}
				</p>
			)}
		</div>
	);
};
