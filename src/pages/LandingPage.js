import React from "react";
import Footer from "../container/footer/Footer";
import Header from "../container/header/Header";
import Main from "../container/main/Main";
import TopNav from "../component/Navigation/TopNav";

const LandingPage = () => {
	return (
		<div className='flex min-h-screen flex-col place-content-between'>
			<TopNav />
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default LandingPage;
