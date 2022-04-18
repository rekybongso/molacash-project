import React from "react";

import FBIcon from "../../component/icons/FBIcon";
import IGIcon from "../../component/icons/IGIcon";
import TwitterIcon from "../../component/icons/TwitterIcon";
import YTIcon from "../../component/icons/YTIcon";
import LocationIcon from "../../component/icons/LocationIcon";
import logoMolacash from "../../assets/img/logo-molacash.png";

const Footer = () => {
	return (
		<>
			<div className='mt-9 grid grid-flow-row gap-5 bg-gray-300 p-7 md:gap-1 lg:grid-flow-col lg:grid-cols-5'>
				<div>
					<img
						className='w-32'
						src={logoMolacash}
						alt="Molacash's company logo"
					/>
					<div className='flex flex-row gap-3'>
						<div className='mt-3'>
							<i>{LocationIcon()}</i>
						</div>
						<p className='mt-3 text-xs'>
							Jl Suryo Pranoto No. 59 Petojo Selatan Gambir Jakarta Pusat DKI
							Jakarta RT.10/RW.7, Petojo Utara Kecamatan Gambir, Kota Jakarta
							Pusat Daerah Khusus Ibukota Jakarta 10160
							<br />
							<br />
							Hotline : 085369694646 <br />
							Email : customercare@molacash.co.id
						</p>
					</div>
				</div>
				<div>
					<p className='font-bold'>Produk</p>
					<ul className='mt-5 text-sm'>
						<li>Pinjaman Tunai</li>
						<li>Pinjaman Modal Usaha</li>
						<li>Pinjaman Multiguna</li>
					</ul>
				</div>
				<div>
					<p className='font-bold'>Promo</p>
					<ul className='mt-5 text-sm'>
						<li>Promo Pinjaman Tunai</li>
						<li>Promo Pinjaman Modal Usaha</li>
						<li>Promo Pinjaman Multiguna</li>
					</ul>
				</div>
				<div>
					<p className='font-bold'>FAQ</p>
					<ul className='mt-5 text-sm'>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className='w-fit'>
					<p className='font-bold'>Follow media sosial kami</p>

					<ul className='mt-5 flex flex-row justify-evenly gap-3'>
						<li>
							<a
								href='https://id-id.facebook.com/'
								target='_blank'
								rel='noreferrer'>
								<i>{FBIcon()}</i>
							</a>
						</li>
						<li>
							<a href='https://instagram.com/' target='_blank' rel='noreferrer'>
								<i>{IGIcon()}</i>
							</a>
						</li>
						<li>
							<a href='https://twitter.com/' target='_blank' rel='noreferrer'>
								<i>{TwitterIcon()}</i>
							</a>
						</li>
						<li>
							<a href='https://youtube.com/' target='_blank' rel='noreferrer'>
								<i>{YTIcon()}</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='flex w-full flex-col items-center bg-gray-300'>
				<hr className='w-11/12 border border-gray-600' />

				<p className='p-7 text-sm lg:mr-6 lg:self-end'>
					Copyright © 2022. All Rights Reserved
				</p>
			</div>
		</>
	);
};

export default Footer;
