import type { GetSession } from '@sveltejs/kit';

export const getSession: GetSession = (event) => {
	// MISSING TYPES HERE
	// "Property 'cf' does not exist on type 'Request'. ts(2339)"
	const cf = event.request.cf;
	return { cf: JSON.stringify(cf, null, 2) };
};
