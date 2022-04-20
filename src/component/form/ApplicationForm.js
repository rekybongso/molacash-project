import React from "react";
import { useDataContext } from "../context/DataContext";
import toast from "react-hot-toast";

import Checkbox from "../common/Checkbox";
import InputField from "../common/InputField";
import Button from "../common/Button";
import Radio from "../common/Radio";
import noticeIcon from "../../assets/img/notice.svg";

const ApplicationForm = () => {
	const { apiStates, apiFunc } = useDataContext();
	const { inputData, isSubmitting } = apiStates;
	const { handleDataChange, postApplicationData } = apiFunc;

	const onDataSubmit = (event) => {
		event.preventDefault();
		let promiseData = postApplicationData();

		toast.promise(
			promiseData,
			{
				loading: "Mengirim pengajuan...",
				success: "Pengajuan berhasil, silahkan cek e-mail Anda",
				error: "Gagal, silahkan coba kembali ",
			},
			{
				style: {
					padding: "17px",
					fontWeight: "bold",
				},
				loading: {
					icon: "🚀",
					duration: 3000,
				},
				success: {
					icon: "👌",
					duration: 3000,
				},
				error: {
					icon: "🙏",
					duration: 3000,
				},
			}
		);
	};

	return (
		<div
			id='produk-section'
			className='mx-auto h-fit rounded-xl bg-gradient-radial-to-tl from-sky-300 to-white shadow-xl md:w-10/12 lg:w-1/2'>
			<h2 className='pt-7 pb-7 text-center text-3xl md:text-2xl'>
				Form Pinjaman Dana Tunai
			</h2>
			<form
				className='flex flex-col items-center gap-4'
				onSubmit={onDataSubmit}>
				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputId='input-nama-lengkap'
						inputName='name'
						inputLabel='Nama Lengkap'
						inputPlaceholder='Ketik Nama Lengkap Sesuai KTP'
						inputValue={inputData.name}
						inputChange={handleDataChange}
						inputPattern='^[A-Za-z]+(\s[A-Za-z]+){0,2}$'
						notifyMsg='Bagian ini hanya boleh diisi dengan alphabet, spasi, titik, dan tidak boleh kosong 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='phone_number'
						inputLabel='Nomor Telepon'
						inputPlaceholder='+62 ...'
						inputMaxLength={14}
						inputValue={inputData.phone_number}
						inputChange={handleDataChange}
						inputPattern='(?:\+62)?0?8\d{2}(\d{8})'
						notifyMsg='Bagian ini tidak boleh kosong atau Penulisan nomor telepon kurang tepat, *Contoh: +628221723**** 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='email'
						inputLabel='Alamat Email'
						inputPlaceholder='Ketik Alamat Email Aktif'
						inputType='email'
						inputValue={inputData.email}
						inputChange={handleDataChange}
						notifyMsg='Bagian ini tidak boleh kosong atau Penulisan email kurang tepat, *Contoh: saya@email.com 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='domicile'
						inputLabel='Kota/Kabupaten Domisili'
						inputPlaceholder='Ketik Kota/Kab. Sesuai KTP'
						inputValue={inputData.domicile}
						inputChange={handleDataChange}
						notifyMsg='Bagian ini tidak boleh kosong 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/5'>
					<p className='mb-2'>Dokumen Jaminan</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio
							title='BPKB Atas Nama Sendiri'
							name='warranty'
							value='milik pribadi'
							onChange={handleDataChange}
							defaultChecked={true}
						/>
						<Radio
							title='BPKB Atas Nama Pihak Kedua'
							name='warranty'
							value='pihak kedua'
							onChange={handleDataChange}
						/>
					</div>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='vehicle_brand'
						inputLabel='Merek Kendaraan'
						inputPlaceholder='Ketik, *Contoh: Toyota'
						inputValue={inputData.vehicle_brand}
						inputChange={handleDataChange}
						notifyMsg='Bagian ini tidak boleh kosong 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='vehicle_model'
						inputLabel='Model Kendaraan'
						inputPlaceholder='Ketik, *Contoh: Toyota Yaris'
						inputValue={inputData.vehicle_model}
						inputChange={handleDataChange}
						notifyMsg='Bagian ini tidak boleh kosong 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/5'>
					<p className='mb-2'>Bahan Bakar Kendaraan</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio
							title='Bensin'
							name='fuel_type'
							value='bensin'
							onChange={handleDataChange}
							defaultChecked={true}
						/>
						<Radio
							title='Solar'
							name='fuel_type'
							value='solar'
							onChange={handleDataChange}
						/>
					</div>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/5'>
					<p className='mb-2'>Transmisi Kendaraan</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio
							title='Manual - M/T'
							name='transmission_type'
							value='manual'
							onChange={handleDataChange}
							defaultChecked={true}
						/>
						<Radio
							title='Automatic - A/T'
							name='transmission_type'
							value='automatic'
							onChange={handleDataChange}
						/>
					</div>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/5'>
					<p className='mb-2'>Jenis Roda Penggerak</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio
							title='4 x 2'
							name='wheel_drive_type'
							value='4x2'
							onChange={handleDataChange}
							defaultChecked={true}
						/>
						<Radio
							title='4 x 4'
							name='wheel_drive_type'
							value='4x4'
							onChange={handleDataChange}
						/>
					</div>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='vehicle_year'
						inputLabel='Tahun Kendaraan'
						inputPlaceholder='Ketik, *Contoh: 2010'
						inputMaxLength={4}
						inputValue={inputData.vehicle_year}
						inputChange={handleDataChange}
						inputPattern='\d{4}'
						notifyMsg='Bagian ini tidak boleh kosong atau penulisan tahun kurang tepat 😞'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/5'>
					<InputField
						inputName='license_plate'
						inputLabel='Nomor Kendaraan Bermoto'
						inputPlaceholder='Ketik, *Contoh: B1234CD'
						inputType='text'
						inputValue={inputData.license_plate}
						inputChange={handleDataChange}
						notifyMsg='Bagian ini tidak boleh kosong 😞'
					/>
				</fieldset>

				<fieldset className='mx-auto w-5/6 lg:w-4/5'>
					<p className='mt-5 flex w-fit flex-row items-center gap-2 rounded-xl border-2 border-yellow-400 px-6 py-2 text-center'>
						<img src={noticeIcon} alt='An icon with exclamation mark' />
						<span className='text-sm'>
							Periksa kembali data pengajuan Anda, pastikan data telah sesuai.
						</span>
					</p>
				</fieldset>

				<fieldset className='mt-3 mb-3 flex w-5/6 flex-row justify-center lg:w-4/5'>
					<Checkbox
						label='Saya setuju dengan syarat & ketentuan yang berlaku di Molacash'
						name='konfirm-data'
					/>
				</fieldset>

				<div className='flex flex-col gap-3 pb-14'>
					<Button
						type='submit'
						buttonTitle='Ajukan permohonan'
						disabled={isSubmitting}
					/>
				</div>
			</form>
		</div>
	);
};

export default ApplicationForm;
