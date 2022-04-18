import React from "react";
import logoMolacash from "../../assets/img/logo-molacash.png";
const Header = () => {
	return (
		<header className='h-96 bg-gradient-to-r from-primary-teal to-primary-blue'>
			<div className='mt-3 flex flex-col items-center p-5 md:items-start lg:ml-10'>
				<img
					className='w-64 md:w-72 lg:w-96'
					src={logoMolacash}
					alt='Molacash Dana Tunai'
				/>
				<p className='text-center italic text-gray-700 md:-mt-9 md:ml-20 md:text-left md:text-lg lg:ml-28'>
					Pinjaman aman, Cepat, Tanpa ribet
				</p>
			</div>
		</header>
	);
};

export default Header;
