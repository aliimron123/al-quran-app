import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { ApiError } from '@/types/client.type';
import { LocationResponseByCity } from '@/types/prayer-schedule';
export const GetCity = ({
	city,
	options,
}: {
	city: string;
	options?: UseQueryOptions<LocationResponseByCity, ApiError>;
}) => {
	return useQuery<LocationResponseByCity, ApiError>({
		queryKey: ['location'],
		queryFn: async () => {
			const url = `/sholat/kota/cari/${city}`;
			// console.log('📡 Hitting city URL:', url);
			return await queryFetch({ url });
		},
		enabled: !!city,
		...options,
	});
};
