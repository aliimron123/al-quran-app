import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { ApiError } from '@/types/client.type';
import { QuranAyatResponse } from '@/types/ayat.type';

//  show or get data list of surah and juz
export const GetAyahSurah = ({
	options,
	surat,
}: {
	surat: string;
	options?: UseQueryOptions<QuranAyatResponse, ApiError>;
}) => {
	return useQuery<QuranAyatResponse, ApiError>({
		queryKey: ['surah'],
		queryFn: async () => {
			const url = `/quran/ayat/${surat}/1`;
			// console.log('====================================');
			// console.log(url);
			// console.log('====================================');
			return await queryFetch({ url });
		},
		enabled: !!surat,
		...options,
	});
};
