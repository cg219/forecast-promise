import toDateString from './toDateString.js';

export default function(options) {
	const qs = {};

	if (options.startDate) qs.start_date = toDateString(options.startDate);

	if (options.endDate) {
		qs.end_date = toDateString(options.endDate);
	}

	return qs;
}
