import React from "react";
import { HashLink } from "react-router-hash-link";

import logoMolacash from "../../assets/img/logo-molacash.png";
import heroImg from "../../assets/img/bg-hero.png";
import Button from "../../component/common/Button";

const Header = () => {
	return (
		<header className='mb-5 h-fit bg-white md:mb-10 lg:mb-16 lg:h-[40vw]'>
			<div className='mt-3 grid grid-flow-row gap-3 lg:grid-flow-col lg:grid-cols-2'>
				<div className='flex flex-col place-content-between items-center lg:items-start'>
					<img
						className='mt-3 w-64 md:w-72 lg:ml-14 lg:w-96 2xl:ml-20'
						src={logoMolacash}
						alt='Molacash Dana Tunai'
					/>
					<div className='mb-10 flex flex-col gap-2 lg:ml-24 2xl:mb-16 2xl:ml-24'>
						<p className='text-center text-2xl font-bold italic text-primary-blue md:text-3xl lg:text-left lg:text-5xl 2xl:text-6xl'>
							Pinjam <span className='text-secondary-blue'>Dana Tunai,</span>
							<br />
							Tak Pernah
							<span className='text-secondary-blue'> Secepat Ini</span>
						</p>
						<p className='text-center text-primary-blue md:text-lg lg:text-left 2xl:text-xl'>
							<span className='text-secondary-blue'>Dimanapun Kamu</span>, Kami
							Siap Hadir Membantu
						</p>
						<p className='text-center text-primary-blue md:text-lg lg:text-left 2xl:text-xl'>
							<span className='text-secondary-blue'>Mulai Ajukan Pinjaman</span>
							, Sekarang Juga!
						</p>
						<div className='mt-2 w-full 2xl:text-lg'>
							<HashLink
								smooth
								to='#produk-section'
								className='flex flex-row justify-center lg:justify-start'>
								<Button buttonTitle='Ajukan Pinjaman' type='button' />
							</HashLink>
						</div>
					</div>
				</div>
				<div className='2xl:mr-5'>
					<img className='w-full' src={heroImg} alt='A girl with a pot' />
				</div>
			</div>
		</header>
	);
};

export default Header;
