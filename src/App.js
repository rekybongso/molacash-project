import React from "react";
import "./App.css";

import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Main from "./container/main/Main";
import TopNav from "./component/Navigation/TopNav";

const App = () => {
	return (
		<div className='min-h-screen bg-gray-50 font-inter-serif'>
			<div className='flex flex-col place-content-between'>
				<TopNav />
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default App;
