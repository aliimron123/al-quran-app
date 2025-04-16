import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { GetAyahByJuz, GetAyahBySurah } from '@/service/api/get-quran.query';
import { StatusOverlay } from '@/components/status-overlay';

// Get screen width dynamically
const { width } = Dimensions.get('window');

interface Props {
	surat: string;
}

export function ReadAsSurah({ surat }: Props) {
	// show surah
	const {
		data,
		isError,
		error,
		refetch: refetchSurah,
		isFetching,
	} = GetAyahBySurah({
		no_surat: surat as string,
	});
	const suratData = data?.data ?? [];
	const getJuzNumber = suratData[0]?.juz;

	const {
		data: juzData,
		isFetching: isFetchJuz,
		isError: isErrorJuz,
		error: errorJuz,
		refetch: refetchJuz,
	} = GetAyahByJuz({
		no: getJuzNumber as string,
		options: {
			enabled: !!getJuzNumber,
			queryKey: [getJuzNumber],
		},
	});

	const ayatList = juzData?.data ?? [];
	const filterData = ayatList.filter((val) => val.surah === surat);

	// Saat surat berubah, refetch surah dan setelah dapat juz-nya, baru refetchJuz
	useEffect(() => {
		refetchSurah();
		refetchJuz();
	}, [surat, refetchSurah]);

	// console.log(getJuzNumber);

	if (isFetching || isFetchJuz) {
		return (
			<StatusOverlay
				type='loading'
				text='Mohon tunggu...'
			/>
		);
	}
	if (isError || isErrorJuz) {
		return <Text>{error?.message || errorJuz?.message}</Text>;
	}
	return (
		<View style={styles.container}>
			{filterData.map((val, index) => (
				<React.Fragment key={index}>
					<View style={styles.cardContainer}>
						<Text style={styles.textArabic}>{val.arab}</Text>

						<View style={styles.textContainer}>
							<Text style={styles.textLatin}>{val.latin}</Text>
							<Text style={styles.textTranslate}>
								{val.id}. &nbsp;
								{val.text}
							</Text>
						</View>
					</View>
					<Divider />
				</React.Fragment>
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

	cardContainer: {
		borderBottomColor: 'black',
		flexDirection: 'column',
		gap: 16,
		justifyContent: 'space-between',
		width: width - 20,
		alignSelf: 'center',
		paddingVertical: 8,
		paddingHorizontal: 10,
	},

	textContainer: {
		flexDirection: 'column',
		gap: 8,

		paddingBottom: 10,
	},

	textRow: {
		flexDirection: 'row',
		gap: 8,
		flexWrap: 'wrap', // Allow text to wrap properly
	},

	textLatin: {
		color: '#96529b',
		fontWeight: '700',
		fontSize: 16,
	},

	textTranslate: {
		color: 'black',
		fontSize: 14,
	},

	textArabic: {
		color: '#1e0b37',
		fontSize: 30,
		fontWeight: '500',
		width: '100%',
		fontFamily: 'Amari',
		textAlign: 'right',
	},
	textCenter: {
		color: '#1e0b37',
		fontSize: 28,
		fontWeight: '500',
		width: '100%',
		fontFamily: 'Uthmani',
		textAlign: 'center',
		marginBottom: 20,
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
