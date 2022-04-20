import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const InputField = forwardRef((props, ref) => {
	return (
		<>
			<label className='flex flex-col gap-3'>
				<span>{props.inputLabel}</span>
				<input
					id={props.inputId}
					name={props.inputName}
					type={props.inputType}
					placeholder={props.inputPlaceholder}
					value={props.inputValue}
					onChange={props.inputChange}
					maxLength={props.inputMaxLength}
					pattern={props.inputPattern}
					className='mt-1 block w-full rounded-md border border-primary-blue bg-white px-5 py-3 text-sm placeholder-slate-400 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500'
					ref={ref}
					onInvalid={(event) => {
						event.target.setCustomValidity(props.notifyMsg);
					}}
					onInput={(event) => {
						event.target.setCustomValidity("");
					}}
					required
				/>
			</label>
		</>
	);
});

InputField.displayName = "InputField";
InputField.propTypes = {
	inputId: PropTypes.string,
	inputLabel: PropTypes.string,
	inputName: PropTypes.string,
	inputType: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputPattern: PropTypes.any,
	inputMaxLength: PropTypes.number,
	inputValue: PropTypes.any,
	inputChange: PropTypes.func,
	notifyMsg: PropTypes.string,
};

export default InputField;
