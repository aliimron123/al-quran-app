import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Text } from 'react-native-paper';
import useCurrentTime from '@/hooks/useCurrentTime';

const { width } = Dimensions.get('window');

export function Hero() {
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
						}}>
						{showColon && ':'}
					</Text>
					<Text style={styles.title}>{minutes}</Text>
				</View>
				<Text>Jaln subur no</Text>
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
		height: '100%',
		borderEndEndRadius: 20,
		borderBottomStartRadius: 20,
	},
	textContent: {
		position: 'absolute',
		zIndex: 50,
		justifyContent: 'center',
		alignItems: 'center',
		left: width / 2 - 60,
		top: 110,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 4,
	},
	title: {
		fontSize: 50,
		color: '#0f0529',
	},
});
