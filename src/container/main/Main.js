import React from "react";
import { DataContextProvider } from "../../component/context/DataContext";

import ApplicationForm from "../../component/form/ApplicationForm";
import CTASection from "../../component/section/CTASection";
import FeedbackSection from "../../component/section/FeedbackSection";

const Main = () => {
	return (
		<>
			<DataContextProvider>
				<div className='z-40 min-h-screen w-full md:-mt-48 lg:-mt-[22rem]'>
					<ApplicationForm />
					<CTASection />
					<FeedbackSection />
				</div>
			</DataContextProvider>
		</>
	);
};

export default Main;
