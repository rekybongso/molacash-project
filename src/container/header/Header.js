import React from "react";
import logoMolacash from "../../assets/img/logo-molacash.png";
import heroArtOne from "../../assets/img/hero-art-1.svg";
import heroArtTwo from "../../assets/img/hero-art-2.svg";

const Header = () => {
	return (
		<header className='h-[38vw] bg-gradient-to-r from-primary-teal to-primary-blue'>
			<div className='mt-3 flex flex-col items-center p-5 md:items-start lg:ml-10'>
				<img
					className='-mt-5 w-64 md:w-72 lg:w-96'
					src={logoMolacash}
					alt='Molacash Dana Tunai'
				/>
				<p className='text-center text-xs italic text-gray-700 md:-mt-9 md:ml-20 md:text-left md:text-lg lg:ml-28'>
					Pinjaman Dana Tunai, Tidak Pernah Secepat Ini!
				</p>
				<img
					className='absolute mr-3 mt-7 hidden w-72 self-end lg:block'
					src={heroArtOne}
					alt='A woman explaining about finance'
				/>
				<img
					className='absolute mt-36 ml-16 hidden w-44 lg:block'
					src={heroArtTwo}
					alt='A phone illustration'
				/>
			</div>
		</header>
	);
};

export default Header;
