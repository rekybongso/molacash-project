import React from "react";

const TopNav = () => {
	return (
		<nav className='flex flex-row justify-between bg-white p-3 text-sm drop-shadow-md'>
			<ul className='flew-row ml-14 flex list-none items-center justify-between gap-5'>
				<li className='cursor-pointer rounded-lg px-4 py-2 transition-all duration-200 ease-in-out hover:bg-primary-teal'>
					Produk
				</li>
				<li className='cursor-pointer rounded-lg px-4 py-2 transition-all duration-200 ease-in-out hover:bg-primary-teal'>
					Promo
				</li>
				<li className='cursor-pointer rounded-lg px-4 py-2 transition-all duration-200 ease-in-out hover:bg-primary-teal'>
					FAQ
				</li>
			</ul>
			<ul className='flew-row mr-14 flex list-none items-center justify-between gap-2'>
				<li>IND</li>
				<li>|</li>
				<li>ENG</li>
			</ul>
		</nav>
	);
};

export default TopNav;
