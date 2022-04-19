import React from "react";

const SubscribeSection = () => {
	return (
		<form
			className='mt-16 flex flex-col items-center bg-primary-blue p-12'
			method='post'>
			<h3 className='text-center text-2xl text-white'>
				Dapatkan informasi terbaru dari Molacash <br /> Subscribe sekarang 🥳
			</h3>

			<input
				placeholder='Masukan Alamat Email'
				type='email'
				name='email'
				className='mt-5 rounded-full border-2 border-secondary-blue md:w-2/5'
				required
			/>

			<button className='mt-5 rounded-full bg-orange-juice px-12 py-2 text-white hover:bg-green-tea'>
				Subscribe
			</button>
		</form>
	);
};

export default SubscribeSection;
