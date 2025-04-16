import React, { useEffect } from 'react';
import {
	Pressable,
	StyleSheet,
	View,
	Dimensions,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Link } from 'expo-router';
import { GetSurahList } from '@/service/api/get-quran.query';
import { StatusOverlay } from '@/components/status-overlay';

// Get screen width dynamically
const { width } = Dimensions.get('window');

export function ShowBySurah() {
	const { data, isError, error, refetch, isFetching = true } = GetSurahList();
	const listSurah = data?.data ?? [];

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (isFetching) {
		return (
			<StatusOverlay
				type='loading'
				text='Mohon Tunggu...'
			/>
		);
	}
	if (isError) {
		return <Text>{error.message}</Text>;
	}
	return (
		<View style={styles.container}>
			{listSurah?.map((val, index) => (
				<View key={index}>
					<Link
						href={{
							pathname: '/read/surah/[detail-surah]',
							params: {
								surah: val.number,
								number_relevation: val.number_of_verses,
							},
						}}
						style={styles.linkStyle}
						asChild>
						<Pressable style={styles.cardContainer}>
							<View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
								<TouchableOpacity style={styles.circle}>
									<Text style={styles.textNo}>{val?.number}</Text>
								</TouchableOpacity>
								<View style={styles.textContainer}>
									<Text style={styles.textTitle}>{val?.name_id}</Text>
									<View style={styles.textRow}>
										<Text style={styles.textDesc}>{val?.revelation_id}</Text>
										{/* <Text style={styles.textDesc}>|</Text> */}
										<Text style={styles.textDesc}>
											{val?.number_of_verses} Ayat
										</Text>
									</View>
								</View>
							</View>
							<Text style={styles.textArabic}>{val?.name_short}</Text>
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
		paddingVertical: 16,
		paddingHorizontal: 6,
	},

	cardContainer: {
		borderBottomColor: 'black',
		fontFamily: 'Amari',
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
		fontSize: 24,
		fontWeight: '500',
		fontFamily: 'Uthmani',
		alignSelf: 'flex-end',
	},
	textNo: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
	},

	circle: {
		width: 40,
		height: 40,
		borderRadius: 20, // Makes it round
		backgroundColor: '#3498db',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5,
	},
});
