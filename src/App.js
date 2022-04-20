import React from "react";
import "./App.css";

import { GlobalContextProvider } from "./component/context/GlobalContext";
import { DataContextProvider } from "./component/context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Main from "./container/main/Main";
import TopNav from "./component/navigation/TopNav";

const App = () => {
	return (
		<GlobalContextProvider>
			<DataContextProvider>
				<div className='min-h-screen bg-gray-50 font-inter-serif'>
					<ToastContainer
						position='top-center'
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<div className='flex flex-col place-content-between'>
						<TopNav />
						<Header />
						<Main />
						<Footer />
					</div>
				</div>
			</DataContextProvider>
		</GlobalContextProvider>
	);
};

export default App;
