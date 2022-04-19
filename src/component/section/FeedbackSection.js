import React from "react";
import Button from "../common/Button";
import InputField from "../common/Inputfield";
import Radio from "../common/Radio";

const FeedbackSection = () => {
	return (
		<section className='mt-5 mb-5 flex w-full flex-row justify-center'>
			<div className='w-4/5 rounded-3xl bg-gradient-radial-to-bl from-sky-300 to-white p-10 shadow-xl lg:w-2/3'>
				<h3 className='text-center font-bold text-secondary-blue lg:text-xl'>
					Hai 👋, Yuk Bantu Molacash Agar Terus Berkembang
					<br />
					Masukan Dari Kamu Sangat Berarti Bagi Kami 😊
				</h3>

				<form className='mt-9 p-5'>
					<p className='font-bold lg:text-lg'>
						Berapa penilaianmu untuk Molacash?
					</p>
					<div className='mt-3 flex flex-col gap-5 lg:flex-row'>
						<Radio name='rate' title='Enggak banget' value='1' />
						<Radio name='rate' title='Kurang deh' value='2' />
						<Radio name='rate' title='Biasa aja' value='3' />
						<Radio name='rate' title='Lumayan' value='4' />
						<Radio name='rate' title='Keren abis' value='5' />
					</div>

					<p className='mt-9 font-bold lg:text-lg'>
						Jika ada orang disekitarmu yang membutuhkan pinjaman dana tunai,
						apakah kamu akan merekomendasikan Molacash?
					</p>
					<div className='mt-3 flex flex-col gap-5 lg:flex-row'>
						<Radio name='recommendation' title='Enggak deh' value='no' />
						<Radio
							name='recommendation'
							title='Mungkin iya, mungkin enggak'
							value='maybe'
						/>
						<Radio name='recommendation' title='Iya, boleh juga' value='yes' />
					</div>

					<p className='mt-9 font-bold lg:text-lg'>
						Fitur apa yang harus Molacash buat untuk memenuhi kebutuhan
						finansial kamu?
					</p>
					<InputField
						inputName='feature'
						inputPlaceholder='Masukan fitur yang kamu harapkan'
					/>

					<p className='mt-9 font-bold lg:text-lg'>Alamat email</p>
					<div className='md:w-80'>
						<InputField
							inputName='email'
							inputType='email'
							inputPlaceholder='Masukan email aktif kamu'
						/>
					</div>

					<div className='mt-14 flex justify-center'>
						<Button buttonTitle='Kirim Ulasan' />
					</div>
				</form>
			</div>
		</section>
	);
};

export default FeedbackSection;
