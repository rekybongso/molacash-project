import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
	return (
		<>
			<button className='rounded-xl bg-primary-blue px-5 py-4 text-white hover:bg-secondary-blue'>
				{props.buttonTitle}
			</button>
		</>
	);
};

Button.propTypes = {
	buttonTitle: PropTypes.string,
};

export default Button;
