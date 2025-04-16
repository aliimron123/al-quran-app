import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import {
	CloudMoon,
	CloudSun,
	MoonStar,
	Sun,
	Sunset,
} from 'lucide-react-native';
import { useLocation } from '@/provider/location-provider';
import { GetCity } from '@/service/api/get-location.query';
import { GetScheduleOfShalat } from '@/service/api/get-shalat.query';
import { currentDate } from '@/service/config/timezone';

const { width } = Dimensions.get('screen');

export function PrayerTime() {
	const location = useLocation();
	const city = location?.subregion;
	const date = currentDate();
	console.log(location, 'location');

	const {
		data: cityId,
		isFetching: isFetchCity,
		isError: isErrorCity,
		error: errorCity,
		refetch: refetchCity,
	} = GetCity({
		city: city as string,
	});

	const cityID = cityId?.data;
	const c = cityID?.[0]?.id;
	// console.log(cityID, 'ini city');

	const { data, isFetching, isError, error, refetch } = GetScheduleOfShalat({
		city: c as string,
		date: date as string,
	});

	const schedule = data?.data;
	// console.log(schedule, 'schedule');

	const prayerTime = [
		{ label: 'Subuh', time: schedule?.jadwal?.subuh, Icon: CloudMoon },
		{ label: 'Dzuhur', time: schedule?.jadwal?.dzuhur, Icon: Sun },
		{ label: 'Asar', time: schedule?.jadwal?.ashar, Icon: CloudSun },
		{ label: 'Magrib', time: schedule?.jadwal?.maghrib, Icon: Sunset },
		{ label: 'Isya', time: schedule?.jadwal?.isya, Icon: MoonStar },
	];
	return (
		<View style={styles.container}>
			<View style={styles.col_section}>
				{prayerTime.map((val, index) => {
					const IconComponent = val.Icon; // Get the component reference
					return (
						<View key={index}>
							<Text style={styles.textTitle}>{val.label}</Text>
							<IconComponent
								size={24}
								color={'#2f0b37'}
								style={styles.iconStyles}
							/>

							<Text style={styles.textDesc}>{val.time}</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 8,
		borderColor: '#a84db8',
		padding: 20,
		shadowColor: '#1a061f',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		fontFamily: 'Almalik',
		flexDirection: 'column',
		alignItems: 'stretch',
		width: width - 20,
		alignSelf: 'center',
	},
	col_section: {
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 8,
		alignItems: 'center',
		gap: 8,
		alignContent: 'center',
	},

	textTitle: {
		textAlign: 'center',
		fontWeight: 700,
		fontSize: 14,
		color: '#3f0f48',
	},

	textDesc: {
		textAlign: 'center',
		fontWeight: 600,
		fontSize: 14,
		color: '#1a061f',
	},

	iconStyles: { marginHorizontal: 'auto', marginVertical: 5 },
});
