import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (event) => {
	// MISSING TYPES HERE
	// "Property 'cf' does not exist on type 'Request'. ts(2339)"
	const cf = event.request.cf;
	return { body: { cf } };
};
