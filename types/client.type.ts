export type MutationMethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface QueryFetchOptions {
	url: string;
	inputParams?: any;
	token?: string;
}
export interface MutationFetchOptions {
	url: string;
	method: MutationMethodType;
	body?: any;
	baseURL?: string;
}

export interface ApiError {
	message: string;
	name: string;
	stack: string;
	config: any;
	code: string;
	data: {
		id?: string;
	};
	status: null | number | boolean;
	error: {
		[key: string]: string[];
	};
}
