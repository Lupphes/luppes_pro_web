'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBars } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedinIn,
	faTelegram
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
	const links = [
		{
			name: '$\u00A0\u00A0About_me',
			url: '#about_me'
		},
		{
			name: '$\u00A0\u00A0Education',
			url: '#education'
		},
		{
			name: '$\u00A0\u00A0Experience',
			url: '#experience'
		},
		{
			name: '$\u00A0\u00A0Projects',
			url: '#projects'
		}
	];

	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="background-purple w-full">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative z-50 flex h-16 items-center justify-between text-xl">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={navbar}
							onClick={() => setNavbar(!navbar)}
						>
							<span className="sr-only">Open main menu</span>

							<FontAwesomeIcon icon={faBars} className="fa-lg color-green" />
						</button>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="hidden md:block">
							<div className="flex space-x-4">
								{links.map((link, index) => (
									<div key={index}>
										<a
											href={link.url}
											className="font-ubuntu color-green rounded-md py-2 pr-5 font-medium"
											aria-current="page"
											onClick={() => setNavbar(!navbar)}
										>
											{link.name}
										</a>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="font-ubuntu color-green absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
						<span>Ondřej_Sloup</span>
					</div>
				</div>
			</div>

			<div
				className={navbar ? 'block md:hidden' : 'hidden md:hidden'}
				id="mobile-menu"
			>
				<div className="background-purple absolute grid h-screen w-screen place-items-center content-center opacity-95">
					<div>
						{links.map((link, index) => (
							<div key={index}>
								<a
									href={link.url}
									className="color-green pr-18 ml-auto mr-auto block rounded-md py-3 text-2xl font-semibold"
									aria-current="page"
									onClick={() => setNavbar(!navbar)}
								>
									{link.name}
								</a>
							</div>
						))}
					</div>
					<div className="color-green mt-16 grid grid-cols-4 items-center gap-4">
						<a href="https://github.com/Lupphes/">
							<FontAwesomeIcon icon={faGithub} className="fa-2xl" />
						</a>
						<a href="https://www.linkedin.com/in/osloup/">
							<FontAwesomeIcon icon={faLinkedinIn} className="fa-2xl" />
						</a>
						<a href="https://t.me/Luppes">
							<FontAwesomeIcon icon={faTelegram} className="fa-2xl" />
						</a>
						<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
							<FontAwesomeIcon icon={faGear} className="fa-2xl" />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
