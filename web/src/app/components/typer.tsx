import React, { useState, useEffect } from 'react';

const library = [
	{ command: 'name', output: 'Ondřej Sloup' },
	{ command: 'occupation', output: 'Software Developer' },
	{ command: 'occupation --company', output: 'Red Hat' },
	{ command: 'dogs_or_cats', output: 'dogs' },
	{ command: 'framework --web --frontend', output: 'React Vue.js' },
	{ command: 'age', output: '23' }
];

const Typer = ({ delay }: { delay: number }) => {
	const letterSpeed = 50;
	const commandLoadSpeed = 1000;
	const commandNextSpeed = 500;

	const [stateCommand, setStateCommand] = useState<string[]>([]);
	const [stateOutput, setStateOutput] = useState<string[]>([]);
	const [commandIndex, setCommandIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			let typing = '';
			const currentCommandIndex = commandIndex;

			if (currentCommandIndex < library.length) {
				const nextCommand = library[currentCommandIndex];

				if (nextCommand !== undefined) {
					let letterIndex = 0;
					const typeOutput = () => {
						if (letterIndex < nextCommand.command.length) {
							typing += nextCommand.command.charAt(letterIndex);

							const updatedCommands = [...stateCommand];
							updatedCommands[currentCommandIndex] = typing;
							setStateCommand(updatedCommands);

							letterIndex++;
							setTimeout(typeOutput, letterSpeed);
						}
					};

					setTimeout(typeOutput, commandLoadSpeed);
					setTimeout(() => {
						setStateOutput([
							...stateOutput,
							(stateOutput[currentCommandIndex] = nextCommand.output)
						]);

						setCommandIndex(currentCommandIndex + 1);
					}, commandLoadSpeed + nextCommand.command.length * letterSpeed + commandNextSpeed);
				}
			}
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [commandIndex, delay]);

	return (
		<div className="console text-4xl">
			{stateCommand.map((element, index) => {
				const correspondingElement = stateOutput[index];
				return (
					<div className="grid" key={index}>
						<span className="py-2">
							<span className="color-green">$ </span>
							<span className="color-yellow">{element}</span>
						</span>
						<span>{correspondingElement}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Typer;
