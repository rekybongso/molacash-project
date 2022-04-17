import React from "react";
import BrandLogo from "../icons/BrandLogo";

const TopNav = () => {
	return (
		<nav className='flex flex-row justify-between bg-white p-3 shadow-lg'>
			<i className=''>{BrandLogo()}</i>
			<ul className='flew-row flex list-none items-center justify-between gap-5'>
				<li>Promo</li>
				<li>Tentang Kami</li>
			</ul>
		</nav>
	);
};

export default TopNav;
