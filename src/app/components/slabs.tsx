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
	</div>
);

export default Slabs;
