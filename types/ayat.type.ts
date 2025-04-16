export interface SuratInfo {
	id: number;
	nama: {
		ar: string;
		id: string;
	};
	relevasi: string;
	ayat_max: number;
}

export interface RequestInfo {
	path: string;
	surat: string;
	ayat: string;
	panjang: string;
}

export interface AyatData {
	arab: string;
	asbab: string;
	audio: string;
	ayah: string;
	hizb: string | null;
	id: string;
	juz: string;
	latin: string;
	notes: string | null;
	page: string;
	surah: string;
	text: string;
	theme: string | null;
}

export interface NumberAyatResponse {
	status: boolean;
	request: RequestInfo;
	info: {
		surat: SuratInfo;
	};
	data: AyatData;
}

export interface QuranAyatResponse {
	status: boolean;
	request: RequestInfo;
	info: {
		surat: SuratInfo;
	};
	data: AyatData[];
}
