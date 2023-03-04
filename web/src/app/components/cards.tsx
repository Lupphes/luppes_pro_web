'use client';

import Image from 'next/image';

const projects = [
	{
		name: 'Pokémon Types & Stats',
		group: 'MUNI',
		year: 22,
		image_path: '/pokemon.png',
		image_alt: 'Pokémon website',
		url: 'https://visualization.lupp.es/'
	},
	{
		name: 'Website Competition',
		group: 'CEMACH',
		year: 17,
		image_path: '/israel.png',
		image_alt: 'Israel website',
		url: 'https://israel.lupp.es/'
	},
	{
		name: 'Pokémon Types & Stats',
		group: 'MUNI',
		year: 22,
		image_path: '/pokemon.png',
		image_alt: 'Pokémon website',
		url: 'https://visualization.lupp.es/'
	}
];

const Cards = () => (
	<div
		className="grid grid-cols-1 gap-x-4 gap-y-4 font-semibold sm:grid-cols-2 sm:px-0 md:grid-cols-3 
        [&>*:nth-child(even)]:ml-8 [&>*:nth-child(even)]:px-8 [&>*:nth-child(even)]:sm:ml-0 
        [&>*:nth-child(odd)]:mr-8 [&>*:nth-child(odd)]:px-8 [&>*:nth-child(odd)]:sm:mr-0"
	>
		{projects.map((element, index) => (
			<a href={element.url} key={index} className="background-gray py-4">
				<span className="text-base font-medium">
					<span className="font-semibold">{element.name}</span> ·{' '}
					<span className="italic">{element.group}</span> ·{' '}
					<span className="color-green">&apos;{element.year}</span>
				</span>
				<Image
					className="py-2"
					src={element.image_path}
					alt={element.image_alt}
					width={1920}
					height={1080}
				/>
			</a>
		))}
	</div>
);

export default Cards;
