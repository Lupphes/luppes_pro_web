/** @type {import("eslint").Linter.Config} */
const config = {
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'@haaxor1689/eslint-config'
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports'
			}
		]
	}
};

module.exports = config;
