import Link from 'next/link';

const NotFound = () => (
	<main className="background-black color-white flex min-h-screen items-center justify-center">
		<div className="font-ubuntu container mx-auto max-w-7xl px-4 text-center">
			<h1 className="pb-4 text-6xl font-medium">404</h1>
			<p className="pb-8 text-xl">$&nbsp;&nbsp;Page_not_found</p>
			<Link href="/" className="color-green tracking-widest underline">
				Return home
			</Link>
		</div>
	</main>
);

export default NotFound;
