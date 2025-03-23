import { View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SearchIcon } from 'lucide-react-native';
import { Bookmark } from '@/components/bookmark';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

import AyahQuranList from '@/components/ayah-quran-list';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.scrollView}>
				<View>
					<Header
						rightSide={() => (
							<IconButton
								icon={() => (
									<SearchIcon
										size={24}
										color='black'
									/>
								)}
								mode='contained-tonal'
								size={24}
								iconColor='white'
								containerColor='white'
								onPress={() => console.log('is pressed')}
							/>
						)}
					/>
					<Hero />
					<View style={styles.bookmark}>
						<Bookmark />
					</View>
				</View>

				<View style={styles.container}>
					<AyahQuranList />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'transparent', // Transparent background
	},
	scrollView: {
		flex: 1,
		backgroundColor: 'transparent', // Transparent background
	},
	container: {
		paddingTop: 50,
		paddingBottom: 10,
		paddingLeft: 8,
		paddingRight: 8,
	},
	bookmark: {
		position: 'absolute',
		zIndex: 50,
		justifyContent: 'center',
		alignItems: 'center',
		left: screenWidth / 2 - 25, // Center it (assuming width = 50)
		bottom: 0, // Adjust based on UI needs
		width: 50, // Adjust according to Bookmark component size
		height: 50,
	},
});
