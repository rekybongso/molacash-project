import React from "react";
import BrandLogo from "../icons/BrandLogo";
import SlideNav from "./SlideNav";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const TopNav = () => {
	return (
		<Router>
			<nav className='hidden flex-row justify-between bg-white p-3 text-sm text-gray-700 drop-shadow-md md:flex'>
				<ul className='flew-row ml-14 flex list-none items-center justify-between gap-7'>
					<i className=''>{BrandLogo()}</i>
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
				<ul className='flew-row mr-14 flex list-none items-center justify-between gap-2'>
					<li className='cursor-pointer rounded-lg px-2 py-2 hover:text-primary-blue'>
						🇮🇩 IND
					</li>
					<li>|</li>
					<li className='cursor-pointer rounded-lg px-2 py-2 hover:text-primary-blue'>
						🇬🇧 ENG
					</li>
				</ul>
			</nav>
			<SlideNav />
		</Router>
	);
};

export default TopNav;
