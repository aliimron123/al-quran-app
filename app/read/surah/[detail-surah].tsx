import { ReadAsSurah } from '@/components/feature/quran/read-as-surah';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

export default function SurahDetailScreen() {
	const { surah, number_relevation } = useLocalSearchParams();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: `Surah ${surah}`, // You can change this to real surah name if needed
		});
		surah;
		number_relevation;
	}, [navigation, surah, number_relevation]);
	// console.log(juz);

	return (
		<SafeAreaView style={{ flex: -1, paddingTop: 0 }}>
			<ScrollView>
				<ReadAsSurah surat={surah as string} />
			</ScrollView>
		</SafeAreaView>
	);
}
