import { GetOneRandomDoa } from '@/service/api/get-doa.query';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

function CardDoa() {
	const { data, isFetching, isError, error, refetch } = GetOneRandomDoa({});
	const doaData = data?.data;
	console.log('====================================');
	console.log(doaData?.arab);
	console.log('====================================');

	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					marginTop: 10,
					marginBottom: 10,
					fontSize: 18,
					fontWeight: 700,
				}}>
				Doa Hari ini
			</Text>
			<View style={styles.cardContainer}>
				<Text style={styles.arabicText}>{doaData?.arab}</Text>
			</View>
		</SafeAreaView>
	);
}

export default CardDoa;

const styles = StyleSheet.create({
	container: {
		padding: 6,
	},
	cardContainer: {
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 10,
		backgroundColor: '#968aec',
	},
	arabicText: {
		fontFamily: 'AlMajid',
		letterSpacing: 2,
		lineHeight: 38,
		fontSize: 24,
		color: 'white',
		textAlign: 'right',
	},
	indoText: { fontFamily: 'Roboto', fontSize: 16 },
});
