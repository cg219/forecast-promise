import toDateString from './toDateString.js';

export interface DateProps {
	startDate?: Date,
	endDate?: Date
}

export function stringifyDates({ startDate, endDate }: DateProps) {
	const qs = {
		start_date: '',
		end_date: ''
	};

	if (startDate) qs.start_date = toDateString(startDate);

	if (endDate) {
		qs.end_date = toDateString(endDate);
	}

	return qs;
}

export default {
	stringifyDates
}
