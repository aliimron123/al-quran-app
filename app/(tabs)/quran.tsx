import QuranView from '@/components/feature/quran/quran-view';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
	return <QuranView />;
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
