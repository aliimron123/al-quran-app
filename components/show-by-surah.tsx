import React from 'react';
import { Pressable, StyleSheet, View, Dimensions } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Link } from 'expo-router';
import { Surah } from '@/types/surah.type';

// Get screen width dynamically
const { width } = Dimensions.get('window');

interface IProps {
	data: Surah[];
	isLoading?: boolean;
}
export default function ShowBySurah({ data, isLoading }: IProps) {
	if (isLoading) {
		return <Text>Loading...</Text>;
	}
	return (
		<View style={styles.container}>
			{data?.map((val, index) => (
				<View key={index}>
					<Link
						href={'/read-quran'}
						style={styles.linkStyle}
						asChild>
						<Pressable style={styles.cardContainer}>
							<View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
								<Text style={styles.textNo}>{val.nomor}</Text>
								<View style={styles.textContainer}>
									<Text style={styles.textTitle}>{val?.namaLatin}</Text>
									<View style={styles.textRow}>
										<Text style={styles.textDesc}>{val?.tempatTurun}</Text>
										<Text style={styles.textDesc}>|</Text>
										<Text style={styles.textDesc}>{val?.jumlahAyat} Ayat</Text>
									</View>
								</View>
							</View>
							<Text style={styles.textArabic}>{val?.nama}</Text>
						</Pressable>
					</Link>
					<Divider />
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		width: '100%',
		borderRadius: 4,
	},

	linkStyle: {
		width: '100%',
		padding: 15,
	},

	cardContainer: {
		borderBottomColor: 'black',
		fontFamily: 'Marhaban',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: width - 20,
		alignSelf: 'center',
	},

	textContainer: {
		flexShrink: 1, // Prevents overflowing text
	},

	textRow: {
		flexDirection: 'row',
		gap: 8,
		flexWrap: 'wrap', // Allow text to wrap properly
	},

	textTitle: {
		color: '#96529b',
		fontWeight: '700',
		fontSize: 14,
	},

	textDesc: {
		color: 'black',
		fontSize: 12,
	},

	textArabic: {
		color: '#1e0b37',
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'Uthmani',
		alignSelf: 'flex-end',
	},
	textNo: {
		marginVertical: 'auto',
		marginRight: 8,
		fontSize: 12,
		fontWeight: 800,
		color: 'white',
		backgroundColor: '#96529b',
	},
});
