export interface DoaRequest {
	path: string;
	id: number;
}

export interface DoaData {
	arab: string;
	indo: string;
	judul: string;
	source: string;
}

export interface OneDayDoaResponse {
	status: boolean;
	request: DoaRequest;
	data: DoaData;
}
