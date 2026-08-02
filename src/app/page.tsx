'use client';

import Wolf from './components/wolf';
import Typer from './components/typer';
import Cards from './components/cards';
import Slabs from './components/slabs';

const Home = () => (
	<div>
		<header
			id="header"
			className="background-black overflow-anchor-revert h-4/5 overflow-y-scroll"
		>
			<div className="container mx-auto block max-w-7xl grid-cols-1 py-10 sm:px-16 xl:grid xl:grid-cols-2">
				<div className="font-ubuntu color-white background-gray min-h-[50vh]  px-4 py-6 text-2xl">
					<Typer delay={200} />
				</div>
				<div className="color-white hidden justify-self-center xl:block">
					<Wolf />
				</div>
			</div>
		</header>
		<main className="h-4/5">
			<section id="about_me" className="background-white color-black">
				<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 px-4 py-20 tracking-wide sm:px-6 lg:px-8 ">
					<h2 className="font-ubuntu pb-6 text-4xl font-medium">
						$&nbsp;&nbsp;About_me
					</h2>
					<div className="grid pb-4 text-xl font-medium">
						<span>Software Engineer and Researcher</span>
						<span>with a bachelor in Computer Science</span>
					</div>
					<p className="bold-span text-lg">
						There is always a place to <span>grow</span> and{' '}
						<span>overcome challenges</span>. The one who steps out of the line
						is <span>one step ahead</span>. I&apos;m always trying to be there
						to
						<span> find new ways</span> how to <span>approach problems</span>{' '}
						and new topics and learn as much from my collages and my mistakes as
						I can. I&apos;ve had many great mentors and friends who pushed me{' '}
						<span>forward</span> to make unique projects and startups where I
						had to work with what you got at the time.
						<span className="block"> Amazing experience!</span>
					</p>
				</div>
			</section>
			<section id="education" className="background-black color-white">
				<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 py-20 px-4 sm:px-6 lg:px-8">
					<h2 className="font-ubuntu pb-6 text-4xl font-medium">
						$&nbsp;&nbsp;Education
					</h2>
					<div className="grid grid-cols-1 gap-x-20 tracking-wide sm:grid-cols-1 md:grid-cols-2 md:gap-x-56 md:text-base">
						<div className="pb-4 md:pb-0">
							<div className="grid">
								<span className="text-lg font-semibold">
									Masaryk University Brno
								</span>
								<span>Faculty of Information Technology</span>
								<span>
									<span className="font-semibold">Master&apos;s degree</span>,
									Artificial intelligence and
								</span>
								<span>data processing, Bioinformatics and systems biology</span>
							</div>

							<span className="color-green mt-2 block tracking-widest md:mt-8">
								&apos;22&nbsp;&#8211;&nbsp;Present
							</span>
						</div>
						<div className="border-t-2 pt-4 md:border-t-0 md:pt-0">
							<div className="grid">
								<span className="text-lg font-semibold">
									Brno University of Technology
								</span>
								<span>Faculty of Information Technology</span>
								<span>
									<span className="font-semibold">Bachelor&apos;s degree</span>,
									Information Technology
								</span>
							</div>
							<span className="color-green mt-2 block tracking-widest md:mt-8">
								&apos;19&nbsp;&#8211;&nbsp;&apos;22
							</span>
						</div>
					</div>
				</div>
			</section>
			<section id="experience" className="background-white color-black">
				<div className="container mx-auto grid max-w-7xl grid-cols-1 py-20 px-0 md:px-6 lg:px-8">
					<h2 className="font-ubuntu px-4 pb-6 text-4xl font-medium md:px-0">
						$&nbsp;&nbsp;Experience
					</h2>
					<Slabs />
				</div>
			</section>
			<section id="projects" className="background-black color-white">
				<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 py-20 px-0 md:px-6 lg:px-8">
					<h2 className="font-ubuntu px-4 pb-6 text-4xl font-medium md:px-0">
						$&nbsp;&nbsp;Projects
					</h2>
					<Cards />
				</div>
			</section>
		</main>
	</div>
);

export default Home;
