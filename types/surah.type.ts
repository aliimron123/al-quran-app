export type SurahResponse = {
	status: boolean;
	code: number;
	message: string;
	data: SurahTypeData[];
};

export type NumberSurahResponse = {
	status: boolean;
	code: number;
	message: string;
	data: SurahTypeData;
};

export type JuzResponse = {
	status: boolean;
	code: number;
	message: string;
	data: JuzTypeData[];
};

export type AudioFull = {
	[key: string]: string;
};

export type SurahTypeData = {
	audio_url: string;
	name_en: string;
	name_id: string;
	name_long: string;
	name_short: string;
	number: string;
	number_of_verses: string;
	revelation: string;
	revelation_en: string;
	revelation_id: string;
	sequence: string;
	tafsir: string;
	translation_en: string;
	translation_id: string;
};

export type JuzTypeData = {
	ayat_arab: string;
	ayat_indo: string;
	ayat_latin: string;
	name: string; // e.g., "Juz 1"
	name_end_arab: string;
	name_end_id: string;
	name_start_arab: string;
	name_start_id: string;
	number: string; // still string if that's what the API returns
	surah_id_end: string;
	surah_id_start: string;
	verse_end: string;
	verse_start: string;
};
