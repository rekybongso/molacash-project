import React from "react";
import BrandLogo from "../icons/BrandLogo";
import { HashLink } from "react-router-hash-link";
import { useGlobalContext } from "../context/GlobalContext";

const SlideNav = () => {
	let { slideMenu, setSlideMenu } = useGlobalContext();

	const handleSlideNav = (event) => {
		event.preventDefault();

		let toggle = slideMenu;
		setSlideMenu(!toggle);
	};

	return (
		<>
			<nav className='flex flex-row justify-between bg-white p-3 text-sm text-gray-700 drop-shadow-md md:hidden'>
				<i className=''>{BrandLogo()}</i>
				<button
					onClick={handleSlideNav}
					className='inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-600 focus:outline-none'>
					<svg
						className='block h-8 w-8 text-gray-600 duration-300 ease-in-out hover:text-primary-blue lg:hidden'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<line x1='21' y1='6' x2='3' y2='6' />
						<line x1='21' y1='12' x2='3' y2='12' />
						<line x1='21' y1='18' x2='3' y2='18' />
					</svg>
				</button>
			</nav>
			<div
				className={`fixed right-0 top-0 z-50 flex h-full w-72 transform flex-col gap-7 border-2 bg-gray-100 p-5 text-center transition-all duration-300 ease-in-out lg:hidden ${
					slideMenu ? "translate-x-0" : "translate-x-full"
				}`}>
				<button className='flex justify-end' onClick={handleSlideNav}>
					<svg
						className='block h-8 w-8 text-gray-600 duration-300 ease-in-out hover:text-primary-blue lg:hidden'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<line x1='18' y1='6' x2='6' y2='18' />
						<line x1='6' y1='6' x2='18' y2='18' />
					</svg>
				</button>
				<ul className='border-b-2'>
					<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
						<HashLink smooth to='/#produk-section'>
							Produk
						</HashLink>
					</li>
					<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
						<HashLink smooth to='/#promo-section'>
							Promo
						</HashLink>
					</li>
					<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
						<HashLink smooth to='/#kontak-section'>
							Kontak
						</HashLink>
					</li>
					<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
						<HashLink smooth to='/#faq-section'>
							FAQ
						</HashLink>
					</li>
				</ul>
				<ul>
					<li className='cursor-pointer rounded-lg px-2 py-2 hover:text-primary-blue'>
						🇮🇩 BAHASA
					</li>

					<li className='cursor-pointer rounded-lg px-2 py-2 hover:text-primary-blue'>
						🇬🇧 ENGLISH
					</li>
				</ul>
			</div>
		</>
	);
};

export default SlideNav;
