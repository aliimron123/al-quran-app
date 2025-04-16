import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { ApiError } from '@/types/client.type';
import { OneDayDoaResponse } from '@/types/doa.types';

export const GetOneRandomDoa = ({
	options,
}: {
	options?: UseQueryOptions<OneDayDoaResponse, ApiError>;
}) => {
	return useQuery<OneDayDoaResponse, ApiError>({
		queryKey: ['onedoa'],
		queryFn: async () => {
			const url = `/doa/acak`;
			// console.log('📡 Hitting schedule URL:', url);
			return await queryFetch({ url });
		},
		...options,
	});
};
