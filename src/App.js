import React from "react";
import "./App.css";

import { GlobalContextProvider } from "./component/context/GlobalContext";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Main from "./container/main/Main";
import TopNav from "./component/navigation/TopNav";

const App = () => {
	return (
		<GlobalContextProvider>
			<div className='min-h-screen bg-gray-50 font-inter-serif'>
				<div className='flex flex-col place-content-between'>
					<TopNav />
					<Header />
					<Main />
					<Footer />
				</div>
			</div>
		</GlobalContextProvider>
	);
};

export default App;
