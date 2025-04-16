import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	useWindowDimensions,
} from 'react-native';

import { ShowBySurah } from './show-by-surah';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ShowByJuz } from './show-by-juz';

const surahRoute = () => (
	<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
		<ShowBySurah />
	</ScrollView>
);

const juzRoute = () => (
	<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
		<ShowByJuz />
	</ScrollView>
);

const renderScene = SceneMap({
	surah: surahRoute,
	juz: juzRoute,
});

type Route = {
	key: string;
	title: string;
};

const routes: Route[] = [
	{ key: 'surah', title: 'Surah' },
	{ key: 'juz', title: 'Juz' },
];

export default function QuranView() {
	const layout = useWindowDimensions();
	const [index, setIndex] = React.useState<number>(0);

	return (
		<SafeAreaView style={styles.container}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={(newIndex) => {
					// console.log('Current Route:', routes[newIndex]); // ✅ Logs current route
					setIndex(newIndex);
				}}
				initialLayout={{ width: layout.width }}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, // ✅ Ensures it fills the tab space
	},
	loadingContainer: {
		flex: -1,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 50,
	},
});
