export interface LocationResponseByCity {
	status: boolean;
	request: {
		path: string;
		keyword: string;
	};
	data: LocationData[];
}

export interface AllLocationResponse {
	status: boolean;
	request: {
		path: string;
		keyword: string;
	};
	data: LocationData[];
}

export interface CurrentScheduleResponse {
	status: boolean;
	request: {
		path: string;
		year: string;
		month: string;
		date: string;
	};
	data: ScheduleData;
}

export interface LocationData {
	id: string;
	lokasi: string;
}

export interface ScheduleData {
	id: string;
	lokasi: string;
	daerah: string;
	jadwal: {
		tanggal: string;
		imsak: string;
		subuh: string;
		terbit: string;
		dhuha: string;
		dzuhur: string;
		ashar: string;
		maghrib: string;
		isya: string;
		date: string;
	};
}
