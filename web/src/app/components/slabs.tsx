'use client';

const experience = [
	{
		position: 'Associate Software Engineer',
		company: 'Red Hat',
		extra: '',
		from_month: 'Apr.',
		from_year: 22,
		to_month: '',
		to_year: 'Present'
	},
	{
		position: 'Researcher',
		company: 'Brno University of Technology',
		extra: '',
		from_month: 'May',
		from_year: 22,
		to_month: '',
		to_year: 'Present'
	},
	{
		position: 'Junior QA Engineer',
		company: 'Avast',
		extra: '',
		from_month: 'Nov.',
		from_year: 19,
		to_month: 'Apr.',
		to_year: '22'
	},
	{
		position: 'Watson Researcher, ',
		company: 'IBM',
		extra: 'Intership',
		from_month: 'May',
		from_year: 17,
		to_month: 'Sept.',
		to_year: '17'
	}
];

const Slabs = () => (
	<div
		className="grid grid-cols-1 gap-x-16 text-base sm:grid-cols-1 md:grid-cols-2 xl:gap-x-32                 
    [&>*:nth-child(even)]:ml-8 [&>*:nth-child(even)]:mt-4
    [&>*:nth-child(even)]:text-right [&>*:nth-child(even)]:md:ml-0 [&>*:nth-child(even)]:md:mr-0
    
    [&>*:nth-child(even)]:md:mt-20 [&>*:nth-child(odd)]:mr-8
    [&>*:nth-child(odd)]:mt-4 [&>*:nth-child(odd)]:md:mt-0"
	>
		{experience.map((element, index) => (
			<div className="" key={index}>
				<div className="color-white background-purple grid py-4 px-8 ">
					<span>
						<span className="font-semibold italic">{element.company}</span> ·{' '}
						<span className="font-bold">
							{element.position}
							<span className="italic">{element.extra}</span>
						</span>
					</span>
					<span className="color-green text-sm tracking-widest">
						{element.from_month}&nbsp;&apos;{element.from_year}
						&nbsp;&#8211;&nbsp;{element.to_month}&nbsp;&apos;{element.to_year}
					</span>
				</div>
			</div>
		))}
		{/* <div>
			<div className="color-white background-purple mr-8 grid py-4 px-8 md:mr-0">
				<span>
					<span className="font-semibold">Associate Software Engineer</span> ·{' '}
					<span className="italic">Red Hat</span>
				</span>
				<span className="color-green text-sm tracking-widest">
					Apr.&nbsp;&apos;22&nbsp;&#8211;&nbsp;Present
				</span>
			</div>
		</div>
		<div className="mt-4 md:mt-20">
			<div className="color-white background-purple ml-8 grid py-4 px-8 md:ml-0">
				<span>
					<span className="italic">Brno University of Technology</span> ·{' '}
					<span className="font-semibold">Researcher</span>
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
	</div>
	<div
		className="grid grid-cols-1 gap-x-4 gap-y-4 font-semibold sm:grid-cols-2 sm:px-0 md:grid-cols-3
	    [&>*:nth-child(even)]:ml-8 [&>*:nth-child(even)]:px-8 [&>*:nth-child(even)]:sm:ml-0
	    [&>*:nth-child(odd)]:mr-8 [&>*:nth-child(odd)]:px-8 [&>*:nth-child(odd)]:sm:mr-0"
	>
		{projects.map((element, index) => (
			<div className="background-gray py-4" key={index}>
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
			</div>
		))}
	</div> */}
	</div>
);

export default Slabs;
