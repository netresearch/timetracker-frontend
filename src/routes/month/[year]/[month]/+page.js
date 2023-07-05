import { redirect } from '@sveltejs/kit';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	let url = new URL("https://tt.netresearch.de/interpretation/time");
	url.searchParams.set("month", params.month);
	url.searchParams.set("year", params.year);
	url.searchParams.set("limit", "100");
	url.searchParams.set("user", "10");

	const res = await fetch(
		url,
		{
			body: null,
			method: 'GET',
			//mode: 'no-cors',
			credentials: 'include',
		}
	);

	if (res.status === 401) {
		throw redirect(302, '/login');
	} else if (res.status !== 200) {
		throw new Error('invalid response status: ' + res.statusText + " - " + res.status);
	}

	const summaries = await res.json();

	return {
		summaries
	};
}
