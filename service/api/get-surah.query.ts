import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { SurahResponse } from '@/types/surah.type';
import { ApiError } from '@/types/client.type';
export const GetSurah = (
	options?: UseQueryOptions<SurahResponse, ApiError>,
) => {
	return useQuery<SurahResponse, ApiError>({
		queryKey: ['Surah'],
		queryFn: async () => {
			return await queryFetch({
				url: 'surat',
			});
		},
		refetchOnMount: 'always',
		staleTime: 0,
		...options,
	});
};
