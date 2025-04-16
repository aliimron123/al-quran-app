import React, { useEffect } from 'react';
import {
	Pressable,
	StyleSheet,
	View,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { Link } from 'expo-router';
import { GetJuzList, GetSurahList } from '@/service/api/get-quran.query';
import { StatusOverlay } from '@/components/status-overlay';

// Get screen width dynamically
const { width } = Dimensions.get('window');

export function ShowByJuz() {
	const { data, isError, error, refetch, isFetching } = GetJuzList();
	const juzList = data?.data ?? [];

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (isFetching) {
		return (
			<StatusOverlay
				type='loading'
				spinnerColor='#782986'
				text='Mohon tunggu...'
			/>
		);
	}
	if (isError) {
		return <Text>{error.message}</Text>;
	}
	return (
		<View style={styles.container}>
			{juzList?.map((val, index) => (
				<View key={index}>
					<Link
						href={{
							pathname: '/read/juz/[detail-juz]',
							params: { juz: val.number },
						}}
						style={styles.linkStyle}
						asChild>
						<Pressable style={styles.cardContainer}>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									gap: 5,
									marginVertical: 'auto',
								}}>
								<TouchableOpacity style={styles.circle}>
									<Text style={styles.textNo}>{val?.number}</Text>
								</TouchableOpacity>
								<View style={styles.textContainer}>
									<Text style={styles.textTitle}>{val?.name}</Text>
									<View style={styles.textRow}>
										<Text style={styles.textDesc}>
											Mulai Di:{val?.name_start_id} Ayat {val?.verse_start}
										</Text>
									</View>
								</View>
							</View>
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
		fontSize: 16,
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
		margin: 5,
	},
	centered: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
	},
});
