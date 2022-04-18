import React from "react";
import PropTypes from "prop-types";

const Radio = (props) => {
	return (
		<>
			<div className='flex items-center gap-8'>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						name={props.name}
						value={props.value}
						className='h-5 w-5 border-2 border-primary-blue bg-none checked:bg-primary-blue checked:hover:bg-primary-blue focus:ring-0 checked:focus:bg-primary-blue checked:focus:ring-offset-0 checked:active:bg-primary-blue'
						checked={props.isChecked}
						defaultChecked={props.defaultChecked}
						onChange={props.onChange}
						required
					/>
					<span className='ml-2'>{props.title}</span>
				</label>
			</div>
		</>
	);
};

Radio.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	isChecked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.any,
};

export default Radio;
