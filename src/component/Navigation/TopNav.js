import React from "react";

const TopNav = () => {
	return (
		<nav className='flex flex-row justify-between bg-white p-3 text-sm text-gray-700 drop-shadow-md'>
			<ul className='flew-row ml-14 flex list-none items-center justify-between gap-7'>
				<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
					Produk
				</li>
				<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
					Promo
				</li>
				<li className='cursor-pointer rounded-lg px-4 py-2 hover:text-primary-blue'>
					FAQ
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
	);
};

export default TopNav;
