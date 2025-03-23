export type AudioFull = {
	[key: string]: string;
};

export type Surah = {
	nomor: number;
	nama: string;
	namaLatin: string;
	jumlahAyat: number;
	tempatTurun: string;
	arti: string;
	deskripsi: string;
	audioFull: AudioFull;
};

export type SurahResponse = {
	code: number;
	message: string;
	data: Surah[];
};
