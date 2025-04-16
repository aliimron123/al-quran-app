import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
interface LocationContextType {
	city: string | null;
	country: string | null;
	district: string | null;
	formattedAddress: string | null;
	isoCountryCode: string | null;
	name: string | null;
	postalCode: string | null;
	region: string | null;
	street: string | null;
	streetNumber: string | null;
	subregion: string | null;
	loading: boolean;
}

interface Props {
	children: React.ReactNode;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: Props) => {
	const [locationData, setLocationData] = useState<LocationContextType>({
		city: '',
		country: '',
		district: '',
		formattedAddress: '',
		isoCountryCode: '',
		name: '',
		postalCode: '',
		region: '',
		street: '',
		streetNumber: '',
		subregion: '',
		loading: true,
	});

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				// Request permission
				const { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== 'granted') {
					console.log('Permission to access location was denied');
					setLocationData((prev) => ({ ...prev, loading: false }));
					return;
				}

				// Get current location
				const location = await Location.getCurrentPositionAsync({});

				const { latitude, longitude } = location.coords;

				// Reverse geocode to get country
				const geocode = await Location.reverseGeocodeAsync({
					latitude,
					longitude,
				});

				if (geocode.length > 0) {
					const country = geocode[0].isoCountryCode || 'ID';
					const city = geocode[0].city || 'Jakarta';
					const district = geocode[0].district || '';
					const formattedAddress = geocode[0].formattedAddress || '';
					const isoCountryCode = geocode[0].isoCountryCode || 'ID';
					const name = geocode[0].name || '';
					const postalCode = geocode[0].postalCode || '';
					const region = geocode[0].region || '';
					const street = geocode[0].street || '';
					const streetNumber = geocode[0].streetNumber || '';
					const subregion = geocode[0].subregion || '';

					// If the country is not Indonesia, default to Jakarta
					if (country == null || country == undefined || country !== 'ID') {
						setLocationData({
							city: 'Jakarta',
							country: 'ID',
							district: '',
							formattedAddress: 'Jakarta',
							isoCountryCode: '',
							name: '',
							postalCode: '',
							region: '',
							street: '',
							streetNumber: '',
							subregion: 'jakarta',
							loading: false,
						});
					} else {
						setLocationData({
							city,
							country,
							district,
							formattedAddress,
							isoCountryCode,
							name,
							postalCode,
							region,
							street,
							streetNumber,
							subregion,
							loading: false,
						});
					}
				}
			} catch (error) {
				console.error('Error fetching location:', error);
				setLocationData((prev) => ({ ...prev, loading: false }));
			}
		};

		fetchLocation();
	}, []);

	return (
		<LocationContext.Provider value={locationData}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocation = () => {
	return useContext(LocationContext);
};
