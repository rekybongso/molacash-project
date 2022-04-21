import React from "react";
import { useDataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const SubscribeSection = () => {
	const { apiStates, apiFunc } = useDataContext();
	const { isSubmitting, inputEmail } = apiStates;
	const { postEmailData, handleEmailChange } = apiFunc;

	const onEmailSubmit = (event) => {
		event.preventDefault();
		let promiseData = postEmailData();

		toast.promise(promiseData, {
			pending: "Mendaftarkan email... 🚀",
			success: "Anda telah berhasil berlangganan, terima kasih 👌",
			error: "Gagal, silahkan coba kembali 🙏",
		});
	};

	return (
		<form
			className='mt-16 flex flex-col items-center bg-primary-blue p-12'
			onSubmit={onEmailSubmit}
			method='post'>
			<h3 className='text-center text-2xl text-white'>
				Dapatkan informasi terbaru dari Molacash <br /> Subscribe sekarang 🥳
			</h3>

			<input
				placeholder='Masukan Alamat Email'
				type='email'
				name='email'
				className='mt-5 rounded-full border-2 border-secondary-blue md:w-1/2 lg:w-1/3 2xl:w-3/12'
				value={inputEmail.email}
				onChange={handleEmailChange}
				onInvalid={(event) => {
					event.target.setCustomValidity(
						"Bagian ini tidak boleh kosong atau Penulisan email kurang tepat, *Contoh: saya@email.com 😞"
					);
				}}
				onInput={(event) => {
					event.target.setCustomValidity("");
				}}
				required
			/>

			<button
				type='submit'
				disabled={isSubmitting}
				className='mt-5 rounded-full bg-orange-juice px-12 py-2 text-white hover:bg-orange-600  disabled:cursor-not-allowed disabled:bg-gray-600'>
				Subscribe
			</button>
		</form>
	);
};

export default SubscribeSection;
