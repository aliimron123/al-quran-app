import { JuzResponse } from './../../types/surah.type';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { SurahResponse } from '@/types/surah.type';
import { ApiError } from '@/types/client.type';
import { QuranAyatResponse } from '@/types/ayat.type';

//  show or get data list of surah and juz
export const GetSurahList = (
	options?: UseQueryOptions<SurahResponse, ApiError>,
) => {
	return useQuery<SurahResponse, ApiError>({
		queryKey: ['surah'],
		queryFn: async () => {
			return await queryFetch({
				url: '/quran/surat/all',
			});
		},
		...options,
	});
};

export const GetJuzList = (
	options?: UseQueryOptions<JuzResponse, ApiError>,
) => {
	return useQuery<JuzResponse, ApiError>({
		queryKey: ['juz'],
		queryFn: async () => {
			return await queryFetch({
				url: '/quran/juz/all',
			});
		},
		...options,
	});
};

// show ayat by juz and surah

export const GetAyahBySurah = ({
	no_surat,
	options,
}: {
	no_surat: string;
	options?: UseQueryOptions<QuranAyatResponse, ApiError>;
}) => {
	return useQuery<QuranAyatResponse, ApiError>({
		queryKey: ['ayah-by-surah'],
		queryFn: async () => {
			return await queryFetch({
				url: `/quran/ayat/${no_surat}/1/1`,
			});
		},
		...options,
		enabled: !!no_surat,
	});
};

export const GetAyahByJuz = ({
	no,
	options,
}: {
	no: string;
	options?: UseQueryOptions<QuranAyatResponse, ApiError>;
}) => {
	return useQuery<QuranAyatResponse, ApiError>({
		queryKey: ['juz-no'],
		queryFn: async () => {
			const url = `/quran/ayat/juz/${no}`;
			// console.log(url);

			return await queryFetch({ url });
		},
		...options,
	});
};
