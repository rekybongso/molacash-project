import React from "react";
import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

const GlobalContext = createContext();

const useGlobalContext = () => {
	let context = useContext(GlobalContext);

	if (context === undefined) {
		throw new Error("GlobalContext undefined, please check your code");
	}

	return context;
};

const GlobalContextProvider = (props) => {
	const [slideMenu, setSlideMenu] = useState(false);

	let contextValue = useMemo(() => {
		return {
			slideMenu,
			setSlideMenu,
		};
	});

	return (
		<GlobalContext.Provider value={contextValue}>
			{props.children}
		</GlobalContext.Provider>
	);
};

GlobalContextProvider.propTypes = {
	children: PropTypes.any,
};

export { useGlobalContext, GlobalContextProvider };
