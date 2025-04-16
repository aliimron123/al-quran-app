import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Text } from 'react-native-paper';
import useCurrentTime from '@/hooks/useCurrentTime';
import { useLocation } from '@/provider/location-provider';

const { width } = Dimensions.get('window');

export function Hero() {
	const location = useLocation();

	// blur
	const blurhash =
		'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

	// get current time clock
	const { showColon, currentTime } = useCurrentTime();
	const [hours, minutes] = currentTime.split(':');
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('@/assets/images/bg-purple.png')}
				placeholder={{ blurhash }}
				contentFit='cover'
				transition={1000}
			/>
			<View style={styles.textContent}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text style={styles.title}>{hours}</Text>

					<Text
						style={{
							fontSize: 40,
							fontWeight: 600,
							margin: 'auto',
							width: 7,
							color: 'black',
						}}>
						{showColon && ':'}
					</Text>
					<Text style={styles.title}>{minutes}</Text>
				</View>
				<Text style={styles.textLocation}>{location?.formattedAddress}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: '100%',
		height: 350,
		padding: 0,
		marginBottom: 8,
	},
	image: {
		width: '100%',
		height: '85%',
		borderEndEndRadius: 20,
		borderBottomStartRadius: 20,
	},
	textContent: {
		position: 'absolute',
		top: '45%', // Move it to the middle
		left: 0,
		right: 0,
		alignSelf: 'center',
		transform: [{ translateY: -50 }], // Adjust for exact centering
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 50,
	},
	title: {
		fontSize: 50,
		color: '#0f0529',
	},
	textLocation: {
		fontSize: 14,
	},
});
