import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import ShowBySurah from './show-by-surah';
import { GetSurah } from '@/service/api/get-surah.query';

export default function AyahQuranList() {
	const [value, setValue] = useState('surah');
	const { data, isError, error, refetch, isFetching } = GetSurah();
	const listSurah = data?.data ?? [];
	const [renderTrigger, setRenderTrigger] = useState(0); // Add this state

	useEffect(() => {
		if (value === 'surah') {
			refetch().then(() => {
				setRenderTrigger((prev) => prev + 1); // Force re-render after fetch
			});
		}
	}, [value, refetch]);

	if (isError) {
		return <Text>{error.message}</Text>;
	}

	return (
		<>
			<SafeAreaView>
				<View style={styles.container}>
					<SegmentedButtons
						style={{ backgroundColor: 'white' }}
						value={value}
						onValueChange={setValue}
						buttons={[
							{
								value: 'surah',
								label: 'Read by Surah',
							},
							{
								value: 'juz',
								label: 'Read by Juz',
							},
						]}
					/>
				</View>

				{value === 'surah' && (
					<ShowBySurah
						data={listSurah}
						isLoading={isFetching}
					/>
				)}
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 10,
	},
});
