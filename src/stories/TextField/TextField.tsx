import {
	cloneElement,
	CSSProperties,
	DetailedHTMLProps,
	InputHTMLAttributes,
	ReactElement,
} from 'react';

/**
 * Text Field Input for Text Input and Password
 */
interface TextFieldProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	/**
	 * display left icon
	 */
	leftIcon?: ReactElement;
	/**
	 * display right icon
	 */
	rightIcon?: ReactElement;
	/**
	 * disabled attribute of text input
	 */
	disabled?: boolean;
	/**
	 * if false, the error message will be displayed
	 */
	isValid?: boolean;
	/**
	 * style attribute of text input
	 */
	style?: CSSProperties;
	/**
	 * error message
	 */
	errorMessage?: string;
	/**
	 * style attribute of error message
	 */
	errorMessageStyle?: CSSProperties;
	/**
	 * label of text input
	 */
	label?: string;
	/**
	 * style attribute of label
	 */
	labelStyle?: CSSProperties;
	/**
	 * style attribute of container
	 */
	containerStyle?: CSSProperties;
}

export const TextField = ({
	leftIcon,
	rightIcon,
	disabled = false,
	isValid = true,
	style,
	errorMessage,
	errorMessageStyle,
	label,
	labelStyle,
	containerStyle,
	...props
}: TextFieldProps) => {
	return (
		<div style={containerStyle}>
			{label ? (
				<label style={labelStyle} className="text-sm leading-5">
					{label}
					<div className="relative mt-1">
						{leftIcon &&
							cloneElement(leftIcon, {
								className: `absolute left-[18px] top-[15px] h-[14px] ${
									disabled
										? 'text-neutral-300'
										: isValid
										? ''
										: 'text-error-500'
								}`,
							})}
						{rightIcon &&
							cloneElement(rightIcon, {
								className: `absolute right-[18px] top-[15px] h-[14px] ${
									disabled ? 'text-neutral-300' : ''
								}`,
							})}
						<input
							style={style}
							{...props}
							className={`h-[44px] w-full py-3 px-4 ${
								leftIcon ? 'pl-[42px]' : ''
							} ${rightIcon ? 'pr-[42px]' : ''} ${
								isValid ? '' : 'border border-error-500'
							} rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-sm placeholder-[#999999] 
					focus:outline-none focus:border focus:border-selection-100
					disabled:bg-neutral-50 disabled:outline-none disabled:border disabled:border-neutral-50 disabled:shadow-none disabled:text-neutral-300`}
							disabled={disabled}
						/>
					</div>
				</label>
			) : (
				<div className="relative mt-1">
					{leftIcon &&
						cloneElement(leftIcon, {
							className: `absolute left-[18px] top-[15px] h-[14px] ${
								disabled ? 'text-neutral-300' : isValid ? '' : 'text-error-500'
							}`,
						})}
					{rightIcon &&
						cloneElement(rightIcon, {
							className: `absolute right-[18px] top-[15px] h-[14px] ${
								disabled ? 'text-neutral-300' : ''
							}`,
						})}
					<input
						style={style}
						{...props}
						className={`h-[44px] w-full py-3 px-4 ${
							leftIcon ? 'pl-[42px]' : ''
						} ${rightIcon ? 'pr-[42px]' : ''} ${
							isValid ? '' : 'border border-error-500'
						} rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-sm placeholder-[#999999] 
					focus:outline-none focus:border focus:border-selection-100
					disabled:bg-neutral-50 disabled:outline-none disabled:border disabled:border-neutral-50 disabled:shadow-none disabled:text-neutral-300`}
						disabled={disabled}
					/>
				</div>
			)}
			{!disabled && !isValid && errorMessage && (
				<p
					style={errorMessageStyle}
					className="mt-1 text-xs text-error-500 leading-[18px]"
				>
					{errorMessage}
				</p>
			)}
		</div>
	);
};
