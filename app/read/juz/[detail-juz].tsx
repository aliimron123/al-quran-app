import { ReadAsJuz } from '@/components/feature/quran/read-as-juz';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

export default function JuzDetailScreen() {
	const { juz } = useLocalSearchParams();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: `Juz ${juz}`, // You can change this to real juz name if needed
		});
	}, [navigation, juz]);

	return (
		<SafeAreaView style={{ flex: -1, paddingTop: 0 }}>
			<ScrollView>
				<ReadAsJuz number_juz={juz as string} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: -1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
