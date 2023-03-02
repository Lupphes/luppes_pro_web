'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedinIn,
	faTelegram
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const nervi = '';
	return (
		<footer className="cus-background-black cus-font-color-white mt-2">
			<div className="container mx-auto grid grid-cols-1 py-8 px-4">
				<div className="grid grid-cols-2">
					<div className="grid">
						<div className="cus-font-color-green grid grid-cols-1 items-center gap-2">
							<a
								href="https://github.com/Lupphes"
								className="inline-flex items-center"
							>
								<FontAwesomeIcon icon={faGithub} className="fa-2x w-auto" />
								<span className="ml-4">github.com/Lupphes</span>
							</a>
							<a
								href="https://www.linkedin.com/in/osloup/"
								className="inline-flex  items-center"
							>
								<FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
								<span className="ml-4">linkedin.com/in/osloup</span>
							</a>
							<a
								href="https://t.me/Lupphes"
								className=" inline-flex items-center"
							>
								<FontAwesomeIcon icon={faTelegram} className="fa-2x" />
								<span className="ml-3">@Lupphes</span>
							</a>
						</div>
					</div>
					<div className="relative grid">
						<span className="font-ubuntu cus-font-color-white m-0 mt-auto text-right ">
							Lupphes 2023
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
