'use client';

import Wolf from './components/wolf';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const Home = () => {
	const nervi = 'nervi';
	return (
		<div>
			<header id="header" className="background-black h-4/5">
				<div className="container mx-auto grid grid max-w-7xl grid-cols-2 py-10 sm:px-16 lg:px-24">
					<div className="font-ubuntu color-white border-2 border-solid border-zinc-800 px-2 py-4 text-2xl">
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> name
							</span>
							<span>Ondřej Sloup</span>
						</div>
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> occupation
							</span>
							<span>Software Engineer</span>
						</div>
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> occupation --company
							</span>
							<span>Red Hat</span>
						</div>
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> education --title
							</span>
							<span>Bachelor's degree</span>
						</div>
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> dogs_or_cats
							</span>
							<span>dogs</span>
						</div>
						<div className="grid pb-4">
							<span>
								<span className="color-green">$</span> framework --web
								--frontend
							</span>
							<span>Reactjs Vuejs</span>
						</div>
					</div>
					<div className="color-white hidden justify-self-center xl:block">
						<Wolf />
					</div>
				</div>
			</header>
			<main className="h-4/5">
				<section id="about_me" className="background-white color-black">
					<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 px-2 py-20 tracking-wide sm:px-6 lg:px-8 ">
						<h2 className="font-ubuntu pb-6 text-4xl font-medium">
							$&nbsp;&nbsp;About_me
						</h2>
						<div className="grid pb-4 text-xl font-medium">
							<span>Software Engineer and Researcher</span>
							<span>with a bachelor in Computer Science</span>
						</div>
						<p className="bold-span text-lg">
							There is always a place to <span>grow</span> and{' '}
							<span>overcome challenges</span>. The one who steps out of the
							line is <span>one step ahead</span>. I&apos;m always trying to be
							there to
							<span> find new ways</span> how to <span>approach problems</span>{' '}
							and new topics and learn as much from my collages and my mistakes
							as I can. I&apos;ve had many great mentors and friends who pushed
							me <span>forward</span> to make unique projects and startups where
							I had to work with what you got at the time.
							<span className="block"> Amazing experience!</span>
						</p>
					</div>
				</section>
				<section id="education" className="background-black color-white">
					<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 py-20 px-2 sm:px-6 lg:px-8">
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
									<span>
										data processing, Bioinformatics and systems biology
									</span>
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
										<span className="font-semibold">
											Bachelor&apos;s degree
										</span>
										, Information Technology
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
						<h2 className="font-ubuntu px-2 pb-6 text-4xl font-medium md:px-0">
							$&nbsp;&nbsp;Experience
						</h2>
						<div className="grid grid-cols-1 gap-x-16 text-base sm:grid-cols-1 md:grid-cols-2 xl:gap-x-32">
							<div>
								<div className="color-white background-purple mr-8 grid py-4 px-8 md:mr-0">
									<span>
										<span className="font-semibold">
											Associate Software Engineer
										</span>{' '}
										· <span className="italic">Red Hat</span>
									</span>
									<span className="color-green text-sm tracking-widest">
										Apr.&nbsp;&apos;22&nbsp;&#8211;&nbsp;Present
									</span>
								</div>
							</div>
							<div className="mt-4 md:mt-20">
								<div className="color-white background-purple ml-8 grid py-4 px-8 md:ml-0">
									<span>
										<span className="italic">
											Brno University of Technology
										</span>{' '}
										· <span className="font-semibold">Researcher</span>
									</span>
									<span className="color-green text-sm tracking-widest">
										May&nbsp;&apos;22&nbsp;&#8211;&nbsp;Present
									</span>
								</div>
							</div>
							<div className="mt-4 md:mt-0">
								<div className="color-white background-purple mr-8 grid py-4 px-8 md:mr-0">
									<span>
										<span className="font-semibold">Junior QA Engineer</span> ·{' '}
										<span className="italic">Avast</span>
									</span>
									<span className="color-green text-sm tracking-widest">
										Nov.&nbsp;&apos;19&nbsp;&#8211;&nbsp;Apr.&nbsp;&apos;22
									</span>
								</div>
							</div>
							<div className="mt-4 md:mt-20">
								<div className="color-white background-purple ml-8 grid py-4 px-8 md:ml-0">
									<span>
										<span className="italic">IBM</span> ·{' '}
										<span className="font-semibold">
											Watson Researcher,{' '}
											<span className="italic">Intership</span>
										</span>
									</span>
									<span className="color-green text-sm tracking-widest">
										May&nbsp;&apos;17&nbsp;&#8211;&nbsp;Sept.&nbsp;&apos;17
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="projects" className="background-black color-white">
					<div className="font-open container mx-auto grid max-w-7xl grid-cols-1 py-20 px-0 md:px-6 lg:px-8">
						<h2 className="font-ubuntu px-2 pb-6 text-4xl font-medium md:px-0">
							$&nbsp;&nbsp;Projects
						</h2>
						<div className="grid grid-cols-1 gap-x-4 gap-y-4 font-semibold sm:grid-cols-2 sm:px-0 md:grid-cols-3">
							<div className="background-gray mr-8 px-8 py-4 sm:mr-0">
								<span className="text-base font-medium">
									<span className="font-semibold">Pokémon Types & Stats</span> ·{' '}
									<span className="italic">MUNI</span> ·{' '}
									<span className="color-green">&apos;22</span>
								</span>
								<Image
									className="py-2"
									src="/pokemon.png"
									alt="project1"
									width={1920}
									height={1080}
								/>
							</div>
							<div className="background-gray ml-8 px-8 py-4 sm:ml-0">
								<span className="text-base font-medium">
									<span className="font-semibold">Pokémon Types & Stats</span> ·{' '}
									<span className="italic">MUNI</span> ·{' '}
									<span className="color-green">&apos;22</span>
								</span>
								<Image
									className="py-2"
									src="/pokemon.png"
									alt="project1"
									width={1920}
									height={1080}
								/>
							</div>
							<div className="background-gray mr-8 px-8 py-4 sm:mr-0">
								<span className="text-base font-medium">
									<span className="font-semibold">Pokémon Types & Stats</span> ·{' '}
									<span className="italic">MUNI</span> ·{' '}
									<span className="color-green">&apos;22</span>
								</span>
								<Image
									className="py-2"
									src="/pokemon.png"
									alt="project1"
									width={1000}
									height={1080}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
