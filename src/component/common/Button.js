import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
	return (
		<>
			<button
				className='rounded-xl bg-primary-blue px-5 py-3 text-white hover:bg-secondary-blue disabled:cursor-not-allowed disabled:bg-gray-600'
				type={props.type}
				onClick={props.onClick}
				disabled={props.disabled}>
				{props.buttonTitle}
			</button>
		</>
	);
};

Button.propTypes = {
	buttonTitle: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
