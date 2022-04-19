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
				<h3 className='relative z-20 w-full pt-24 pb-7 text-center text-3xl text-white lg:text-5xl'>
					Kenapa Harus
					<span className='font-bold text-secondary-blue'> Molacash? 🤔</span>
				</h3>
				<div className='grid w-full grid-flow-row grid-cols-1 gap-7 p-9 md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex justify-center lg:justify-end'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artOne} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>Proses 24 Jam</p>
							<p className='text-center text-sm'>
								Dapatkan dana tunai dalam waktu 24 jam pada hari kerja, sejak
								kelengkapan berkas diterima
							</p>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artTwo} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>Pilihan Multifinance</p>
							<p className='text-center text-sm'>
								Bekerja sama dengan lebih dari 20 perusahaan multifinance dan
								dapatkan dana tunai terbaik
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-start'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artThree} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>Bunga 0.9%</p>
							<p className='text-center text-sm'>
								Bunga ringan mulai dari 0,9% berlaku selama pinjaman anda
								berlangsung
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-end'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artFour} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>Nilai Pencairan Besar</p>
							<p className='text-center text-sm'>
								Kamu bisa memaksimalkan nomimal pinjaman dana tunai sesuai
								syarat dan ketentuan
							</p>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artFive} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>
								Hingga 60 Bulan Cicilan
							</p>
							<p className='text-center text-sm'>
								Kami memfasilitasi tenor pinjaman mulai dari 12 bulan sampai
								dengan 60 bulan cicilan
							</p>
						</div>
					</div>
					<div className='flex justify-center lg:justify-start'>
						<div className='flex flex-col items-center rounded-xl bg-gradient-radial-to-bl from-sky-300 to-white p-9 md:w-80 lg:w-72'>
							<img src={artSix} alt='' className='w-32' />
							<p className='p-5 text-center font-bold'>
								Persetujuan Hingga 93%
							</p>
							<p className='text-center text-sm'>
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
