import stringifyDates from './stringifyDates.js';
const baseURL = 'https://api.forecastapp.com';

class Forecast {
	#headers;

	constructor({ accountId, token } = {}, instance) {
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

	async #createMethod({ name, dataLocation, options = {} }) {
		const headers = this.#headers;
		const params = stringifyDates(options);
		const url = new URL(`${baseURL}/${name.toLowerCase()}`);

		url.search = params;

		const route = new Request(url, { headers });
		const prop = dataLocation || name;
		const response = await fetch(route, { });
		const data = await response.json();

		return data[dataLocation];
	}

	async whoAmI(options) {
		return createMethod({
			name: 'whoAmI',
			dataLocation: 'current_user',
			options
		})
	}

	async clients(options) {
		return createMethod({
			name: 'clients',
			options
		})
	}

	async people(options) {
		return createMethod({
			name: 'people',
			options
		})
	}

	async projects(options) {
		return createMethod({
			name: 'projects',
			options
		})
	}

	async assignments(options) {
		return createMethod({
			name: 'assignments',
			options
		})
	}

	async milestones(options) {
		return createMethod({
			name: 'milestones',
			options
		})
	}

	async roles(options) {
		return createMethod({
			name: 'roles',
			options
		})
	}
}

export default Forecast;
