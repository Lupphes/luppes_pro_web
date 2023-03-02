'use client';

import Wolf from './components/wolf';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
	const lse = 'f';

	const handleType = (count: number) => {
		// access word count number
		console.log(count);
	};

	const handleDone = () => {
		console.log(`Done after 5 loops!`);
	};
	return (
		<div>
			<header id="header" className="cus-background-black h-4/5">
				<div className="container mx-auto grid max-w-7xl grid-cols-2 px-2 py-10  sm:px-6 lg:px-8">
					<div className="font-ubuntu cus-font-color-white text-2xl">
						<div className="grid gap-2 pb-4">
							<span className="">
								<span className="cus-font-color-green">$</span>{' '}
								this_is_the_command
							</span>
							<span>
								<span className="cus-font-color-green">$</span> This is the
								response
							</span>
						</div>
						<div className="grid gap-2 pb-4">
							<span className="">
								<span className="cus-font-color-green">$</span>{' '}
								this_is_the_command
							</span>
							<span>
								<span className="cus-font-color-green">$</span> This is the
								response
							</span>
						</div>
						<div className="grid gap-2 pb-4">
							<span className="">
								<span className="cus-font-color-green">$</span>{' '}
								this_is_the_command
							</span>
							<span>
								<span className="cus-font-color-green">$</span> This is the
								response
							</span>
						</div>
						<div className="grid gap-2 pb-4">
							<span className="">
								<span className="cus-font-color-green">$</span>{' '}
								this_is_the_command
							</span>
							<span>
								<span className="cus-font-color-green">$</span> This is the
								response
							</span>
						</div>
					</div>
					<div className="max-width-100 cus-font-color-white grid text-xs">
						<Wolf />
					</div>
				</div>
			</header>
			<main>
				<section id="#about_me" className="cus-background-white">
					<div className="container mx-auto grid grid-cols-1 py-10 px-4">
						<h2 className="pb-2 text-2xl">$&nbsp;&nbsp;About_me</h2>
						<p className="text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</section>
				<section
					id="#education"
					className="cus-background-black cus-font-color-white"
				>
					<div className="container mx-auto grid grid-cols-1 py-10 px-4">
						<h2 className="pb-2 text-2xl">$&nbsp;&nbsp;Education</h2>
						<div className="grid grid-cols-2">
							<div className="grid">
								<span className="text-base font-bold">
									Masaryk University Brno
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
							<div className="grid">
								<span className="text-base font-bold">
									Brno University of Technology
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
						</div>
					</div>
				</section>
				<section
					id="#experience"
					className="cus-background-white cus-font-color-black"
				>
					<div className="container mx-auto grid grid-cols-1 py-10 px-4">
						<h2 className="pb-2 text-2xl">$&nbsp;&nbsp;Experience</h2>
						<div className="grid grid-cols-2">
							<div className="grid">
								<span className="text-base font-bold">
									Masaryk University Brno
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
							<div className="grid">
								<span className="text-base font-bold">
									Brno University of Technology
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
						</div>
					</div>
				</section>
				<section
					id="#projects"
					className="cus-background-black cus-font-color-white"
				>
					<div className="container mx-auto grid grid-cols-1 py-10 px-4">
						<h2 className="pb-2 text-2xl">$&nbsp;&nbsp;Projects</h2>
						<div className="grid grid-cols-2">
							<div className="grid">
								<span className="text-base font-bold">
									Masaryk University Brno
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
							<div className="grid">
								<span className="text-base font-bold">
									Brno University of Technology
								</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
								<span>Brno University of Technology</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
