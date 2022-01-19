import { stringifyDates, DateProps } from './stringifyDates.ts';
const baseURL = 'https://api.forecastapp.com';

class Forecast {
	#headers;

	constructor({ accountId = '', token = '' } = {}) {
		if (!accountId || !token) {
			throw new Error(
				'Forecast module requires accountId and token to be configured.'
			);
		}

		const baseURL = 'https://api.forecastapp.com/';
		this.#headers = {
			Authorization: `Bearer ${token}`,
			'Forecast-Account-Id': accountId,
			'User-Agent': 'https://www.npmjs.com/package/forecast-promise',
		};
	}

	async #createMethod({ name = '', dataLocation = '', options = {} }) {
		const headers = this.#headers;
		const params = stringifyDates(options);
		const url = new URL(`${baseURL}/${name.toLowerCase()}`);

		url.search = new URLSearchParams(params).toString();

		const route = new Request(url.toString(), { headers });
		const prop = dataLocation || name;
		const response = await fetch(route, { });
		const data = await response.json();

		return data[prop];
	}

	async whoAmI(options: DateProps) {
		return this.#createMethod({
			name: 'whoAmI',
			dataLocation: 'current_user',
			options
		})
	}

	async clients(options: DateProps) {
		return this.#createMethod({
			name: 'clients',
			options
		})
	}

	async people(options: DateProps) {
		return this.#createMethod({
			name: 'people',
			options
		})
	}

	async projects(options: DateProps) {
		return this.#createMethod({
			name: 'projects',
			options
		})
	}

	async assignments(options: DateProps) {
		return this.#createMethod({
			name: 'assignments',
			options
		})
	}

	async milestones(options: DateProps) {
		return this.#createMethod({
			name: 'milestones',
			options
		})
	}

	async roles(options: DateProps) {
		return this.#createMethod({
			name: 'roles',
			options
		})
	}
}

export default Forecast;
