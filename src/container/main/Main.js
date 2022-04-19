import React from "react";
import ApplicationForm from "../../component/form/ApplicationForm";
import CTASection from "../../component/section/CTASection";

const Main = () => {
	return (
		<>
			<div id='produk' className='z-40 -mt-64 min-h-screen w-full lg:-mt-44'>
				<ApplicationForm />
				<CTASection />
			</div>
		</>
	);
};

export default Main;
