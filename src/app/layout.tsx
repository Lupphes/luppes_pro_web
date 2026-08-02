import '@/app/styles/globals.scss';
import '@/app/styles/tailwind.scss';

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export const metadata = {
	title: 'Ondřej Sloup - Lupphes',
	description: 'Portfolio website'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className="scroll-smooth">
		<body>
			<Navbar />
			{children}
			<Footer />
		</body>
	</html>
);

export default RootLayout;
