import React from "react";
import artOne from "../../assets/img/art1.svg";
import artTwo from "../../assets/img/art2.svg";
import artThree from "../../assets/img/art3.svg";
import artFour from "../../assets/img/art4.svg";
import artFive from "../../assets/img/art5.svg";
import artSix from "../../assets/img/art6.svg";

const CTASection = () => {
	return (
		<section id='promo-section' className='mt-16 mb-16 min-h-screen'>
			<div className='h-full bg-cta-pattern bg-cover'>
				<h3 className='relative w-full pt-24 text-center text-3xl text-white lg:pb-7 lg:text-4xl 2xl:pb-14 2xl:pt-40 2xl:text-6xl'>
					Kenapa Harus
					<span className='font-bold text-secondary-blue'> Molacash? 🤔</span>
				</h3>
				<div className='grid w-full grid-flow-row grid-cols-1 gap-5 p-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-16'>
					<div className='flex justify-center lg:justify-end'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:mb-10 2xl:w-96'>
							<img src={artOne} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Proses 24 Jam
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Dapatkan dana tunai dalam waktu 24 jam pada hari kerja, sejak
								kelengkapan berkas diterima
							</p>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:mb-10 2xl:w-96'>
							<img src={artTwo} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Pilihan Multifinance
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Bekerja sama dengan lebih dari 20 perusahaan multifinance dan
								dapatkan dana tunai terbaik
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-start'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:mb-10 2xl:w-96'>
							<img src={artThree} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Bunga 0.9%
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Bunga ringan mulai dari 0,9% berlaku selama pinjaman anda
								berlangsung
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-end'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:w-96'>
							<img src={artFour} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Nilai Pencairan Besar
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Kamu bisa memaksimalkan nomimal pinjaman dana tunai sesuai
								syarat dan ketentuan
							</p>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:w-96'>
							<img src={artFive} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Hingga 60 Bulan Cicilan
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Kami memfasilitasi tenor pinjaman mulai dari 12 bulan sampai
								dengan 60 bulan cicilan
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-start'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72 2xl:w-96'>
							<img src={artSix} alt='' className='lg:w-32 2xl:w-48' />
							<p className='p-5 text-center font-bold 2xl:text-xl'>
								Persetujuan Hingga 93%
							</p>
							<p className='text-center lg:text-sm 2xl:text-lg'>
								Pastikan data permohonan adalah data yang valid agar dana
								pinjaman disetujui
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
