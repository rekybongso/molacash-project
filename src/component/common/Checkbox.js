import React from "react";
import PropTypes from "prop-types";

const Checkbox = (props) => {
	return (
		<>
			<label className='flex flex-row items-center gap-3'>
				<input
					id={props.id}
					name={props.name}
					value={props.value}
					onChange={props.onChange}
					checked={props.checked}
					type='checkbox'
					className='h-[18px] w-[18px] rounded border-2 border-primary-blue text-xl checked:bg-primary-blue checked:hover:bg-primary-blue focus:ring-0 checked:focus:bg-primary-blue checked:focus:ring-offset-0 checked:active:bg-primary-blue'
					onInvalid={(event) => {
						event.target.setCustomValidity("Jangan lupa dicentang yah 👍");
					}}
					onInput={(event) => {
						event.target.setCustomValidity("");
					}}
					required
				/>
				<span>{props.label}</span>
			</label>
		</>
	);
};

Checkbox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.any,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Checkbox;
