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
				<h1
					style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
				>
					<span style={{ color: 'red', fontWeight: 'bold' }}>
						<div className="container mx-auto grid px-4">
							Life is simple{' '}
							<Typewriter
								words={['Eat', 'Sleep', 'Code', 'Repeat!']}
								loop={5}
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
								onLoopDone={handleDone}
								onType={handleType}
							/>
						</div>
					</span>
				</h1>
			</header>
			<main className="cus-background-white container mx-auto px-4">
				<div className="cus-background-white">test</div>
				<div className="cus-background-white">test</div>
			</main>
		</div>
	);
};

export default Home;
