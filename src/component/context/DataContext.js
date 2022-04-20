import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const DataContext = createContext();

const useDataContext = () => {
	let context = useContext(DataContext);

	if (context === undefined) {
		throw new Error("DataContext undefined");
	}

	return context;
};

const DataContextProvider = (props) => {
	const defaultApplicationData = {
		name: "",
		phone_number: "",
		email: "",
		domicile: "",
		warranty: "milik pribadi",
		vehicle_brand: "",
		vehicle_model: "",
		fuel_type: "bensin",
		transmission_type: "manual",
		wheel_drive_type: "4x2",
		vehicle_year: "",
		license_plate: "",
	};

	const defaultFeedbackData = {
		rate: "3",
		recommendation: "maybe",
		feature: "",
		email: "",
	};

	const client = axios.create({
		baseURL: "https://backend-molacash.herokuapp.com/",
		headers: {
			post: {
				Accept: "application/json",
			},
		},
	});

	const [inputData, setInputData] = useState(defaultApplicationData);
	const [inputFeedback, setInputFeedback] = useState(defaultFeedbackData);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleDataChange = (event) => {
		let { name, value } = event.target;
		setInputData({ ...inputData, [name]: value });
	};

	const handleFeedbackChange = (event) => {
		let { name, value } = event.target;
		setInputFeedback({ ...inputFeedback, [name]: value });
		console.log(inputFeedback);
	};

	const postApplicationData = () => {
		setIsSubmitting(true);

		return new Promise((resolve, reject) => {
			client
				.post("api/applications", inputData)
				.then((response) => {
					let status = response.status;
					resolve();
					console.log(status);
				})
				.catch((e) => {
					reject();
					console.log(e.message);
				})
				.finally(() => {
					setInputData(defaultApplicationData);
					setIsSubmitting(false);
				});
		});
	};

	const postFeedbackData = () => {
		setIsSubmitting(true);

		return new Promise((resolve, reject) => {
			client
				.post("api/questionnaires", inputFeedback)
				.then((response) => {
					resolve();
					console.log(response);
				})
				.catch((e) => {
					reject();
					console.log(e.message);
				})
				.finally(() => {
					setInputFeedback(defaultFeedbackData);
					setIsSubmitting(false);
				});
		});
	};

	let apiStates = {
		inputData,
		inputFeedback,
		isSubmitting,
		setInputData,
		setInputFeedback,
	};

	let apiFunc = {
		handleDataChange,
		handleFeedbackChange,
		postApplicationData,
		postFeedbackData,
	};

	return (
		<DataContext.Provider value={{ apiStates, apiFunc }}>
			{props.children}
		</DataContext.Provider>
	);
};

DataContextProvider.propTypes = {
	children: PropTypes.any,
};

export { useDataContext, DataContextProvider };
