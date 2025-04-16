import { Stack } from 'expo-router';

export default function ReadLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='juz/[detail-juz]'
				options={{ title: 'Surah', headerShown: true }}
			/>
			<Stack.Screen
				name='surah/[detail-surah]'
				options={{ title: 'Juz', headerShown: true }}
			/>
		</Stack>
	);
}
