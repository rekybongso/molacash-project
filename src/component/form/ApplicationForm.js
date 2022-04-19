import React from "react";
import Checkbox from "../common/Checkbox";
import InputField from "../common/Inputfield";
import Button from "../common/Button";
import Radio from "../common/Radio";
import noticeIcon from "../../assets/img/notice.svg";

const ApplicationForm = () => {
	return (
		<div
			id='produk'
			className='mx-auto h-fit rounded-xl bg-gradient-radial-to-tl from-sky-300 to-white shadow-xl md:w-10/12 lg:w-1/2'>
			<h2 className='pt-14 pb-14 text-center text-2xl md:text-2xl'>
				Form Pinjaman Dana Tunai
			</h2>
			<form className='flex flex-col items-center gap-9'>
				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputId='input-nama-lengkap'
						inputName='nama_lengkap'
						inputLabel='Nama Lengkap'
						inputPlaceholder='Ketik Nama Lengkap Sesuai KTP'
						inputPattern='(^[a-zA-Z ]+$)'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputName='no_telp'
						inputLabel='Nomor Telpon'
						inputPlaceholder='+62 ...'
						inputMaxLength={14}
						inputPattern='^$|[+0-9]+'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputName='email'
						inputLabel='Alamat Email'
						inputPlaceholder='Ketik Alamat Email Aktif'
						inputType='email'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputName='domisili'
						inputLabel='Kota/Kabupaten Domisili'
						inputPlaceholder='Ketik Kota/Kab. Sesuai KTP'
						inputType='email'
					/>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/6'>
					<p className='mb-2'>Bahan Bakar Kendaraan</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio title='Bensin' name='bahan-bakar' value='bensin' />
						<Radio title='Solar' name='bahan-bakar' value='solar' />
					</div>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/6'>
					<p className='mb-2'>Transmisi Kendaraan</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio title='Manual - M/T' name='transmisi' value='manual' />
						<Radio title='Automatic - A/T' name='transmisi' value='automatic' />
					</div>
				</fieldset>

				<fieldset className='w-5/6 gap-2 lg:w-4/6'>
					<p className='mb-2'>Jenis Roda Penggerak</p>
					<div className='ml-5 flex flex-col gap-2'>
						<Radio title='4 x 2' name='jenis-roda' value='2wd' />
						<Radio title='4 x 4' name='jenis-roda' value='4wd' />
					</div>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputName='tahun-kendaraan'
						inputLabel='Tahun Kendaraan'
						inputPlaceholder='Ketik, *Contoh: 2010'
						inputType='number'
					/>
				</fieldset>

				<fieldset className='w-5/6 lg:w-4/6'>
					<InputField
						inputName='no-polisi'
						inputLabel='Nomor Kendaraan Bermoto'
						inputPlaceholder='Ketik, *Contoh: B1234CD'
						inputType='text'
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

				<fieldset className='-mt-3 flex w-5/6 flex-row justify-center lg:w-4/5'>
					<Checkbox
						label='Saya setuju dengan syarat & ketentuan yang berlaku di Molacash'
						name='konfirm-data'
					/>
				</fieldset>

				<div className='pb-14'>
					<Button buttonTitle='Ajukan permohonan' />
				</div>
			</form>
		</div>
	);
};

export default ApplicationForm;
