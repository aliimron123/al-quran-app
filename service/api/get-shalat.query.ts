import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryFetch } from '../config/queryClient';
import { ApiError } from '@/types/client.type';
import { CurrentScheduleResponse } from '@/types/prayer-schedule';
export const GetScheduleOfShalat = ({
	city,
	date,
	options,
}: {
	city: string;
	date: string;
	options?: UseQueryOptions<CurrentScheduleResponse, ApiError>;
}) => {
	return useQuery<CurrentScheduleResponse, ApiError>({
		queryKey: ['shalat', city, date],
		queryFn: async () => {
			const url = `/sholat/jadwal/${city}/${date}`;
			// console.log('📡 Hitting schedule URL:', url);
			return await queryFetch({ url });
		},
		...options,
		enabled: !!city && !!date,
	});
};
