import React from "react";
import ApplicationForm from "../../component/form/ApplicationForm";
import CTASection from "../../component/section/CTASection";
import FeedbackSection from "../../component/section/FeedbackSection";

const Main = () => {
	return (
		<>
			<div className='z-40 -mt-64 min-h-screen w-full lg:-mt-44'>
				<ApplicationForm />
				<CTASection />
				<FeedbackSection />
			</div>
		</>
	);
};

export default Main;
