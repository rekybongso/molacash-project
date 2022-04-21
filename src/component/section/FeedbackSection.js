import React from "react";
import { useDataContext } from "../context/DataContext";
import { toast } from "react-toastify";

import Button from "../common/Button";
import InputField from "../common/InputField";
import Radio from "../common/Radio";

const FeedbackSection = () => {
	const { apiStates, apiFunc } = useDataContext();
	const { inputFeedback, isSubmitting } = apiStates;
	const { handleFeedbackChange, postFeedbackData } = apiFunc;

	const onFeedbackSubmit = (event) => {
		event.preventDefault();
		let promiseData = postFeedbackData();

		toast.promise(promiseData, {
			pending: "Mengirim feedback... 🚀",
			success: "Feedback berhasil terkirim, terima kasih banyak 👌",
			error: "Gagal, silahkan coba kembali 🙏",
		});
	};

	return (
		<section
			id='kontak-section'
			className='mt-5 mb-5 flex w-full flex-row justify-center'>
			<div className='w-4/5 rounded-3xl bg-gradient-radial-to-bl from-sky-300 to-white p-10 shadow-xl lg:w-2/3'>
				<h3 className='text-center font-bold text-secondary-blue lg:text-xl'>
					Hai 👋, Yuk Bantu Molacash Agar Terus Berkembang
					<br />
					Masukan Dari Kamu Sangat Berarti Bagi Kami 😊
				</h3>

				<form className='mt-9 p-5' method='post' onSubmit={onFeedbackSubmit}>
					<p className='font-bold lg:text-lg'>
						Berapa penilaianmu untuk Molacash?
					</p>
					<div className='mt-3 flex flex-col gap-5 lg:flex-row'>
						<Radio
							name='rate'
							title='Enggak banget'
							value='1'
							onChange={handleFeedbackChange}
						/>
						<Radio
							name='rate'
							title='Kurang deh'
							value='2'
							onChange={handleFeedbackChange}
						/>
						<Radio
							name='rate'
							title='Biasa aja'
							value='3'
							onChange={handleFeedbackChange}
							defaultChecked={true}
						/>
						<Radio
							name='rate'
							title='Lumayan'
							value='4'
							onChange={handleFeedbackChange}
						/>
						<Radio
							name='rate'
							title='Keren abis'
							value='5'
							onChange={handleFeedbackChange}
						/>
					</div>

					<p className='mt-9 font-bold lg:text-lg'>
						Jika ada orang disekitarmu yang membutuhkan pinjaman dana tunai,
						apakah kamu akan merekomendasikan Molacash?
					</p>
					<div className='mt-3 flex flex-col gap-5 lg:flex-row'>
						<Radio
							name='recommendation'
							title='Enggak deh'
							value='no'
							onChange={handleFeedbackChange}
						/>
						<Radio
							name='recommendation'
							title='Mungkin iya, mungkin enggak'
							value='maybe'
							onChange={handleFeedbackChange}
							defaultChecked={true}
						/>
						<Radio
							name='recommendation'
							title='Iya, boleh juga'
							value='yes'
							onChange={handleFeedbackChange}
						/>
					</div>

					<p className='mt-9 font-bold lg:text-lg'>
						Fitur apa yang harus Molacash buat untuk memenuhi kebutuhan
						finansial kamu?
					</p>
					<div className='w-full lg:w-3/4 2xl:w-2/3'>
						<InputField
							inputName='feature'
							inputPlaceholder='Masukan fitur yang kamu harapkan'
							inputValue={inputFeedback.feature}
							inputChange={handleFeedbackChange}
							notifyMsg='Bagian ini tidak boleh kosong 😞'
						/>
					</div>

					<p className='mt-9 font-bold lg:text-lg'>Alamat email</p>
					<div className='md:w-80'>
						<InputField
							inputName='email'
							inputType='email'
							inputPlaceholder='Masukan email aktif kamu'
							inputValue={inputFeedback.email}
							inputChange={handleFeedbackChange}
							notifyMsg='Bagian ini tidak boleh kosong atau Penulisan email kurang tepat, *Contoh: saya@email.com 😞'
						/>
					</div>

					<div className='mt-14 flex justify-center'>
						<Button
							buttonTitle='Kirim Ulasan'
							type='submit'
							disabled={isSubmitting}
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default FeedbackSection;
