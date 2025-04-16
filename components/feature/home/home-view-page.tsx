import { View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SearchIcon } from 'lucide-react-native';
import { PrayerTime } from '@/components/feature/home/prayer-time';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import HomeView from '@/components/feature/home/home-menu';
import CardDoa from '../doa/card-doa';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreenView() {
	const router = useRouter();
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
								onPress={() => router.push('/search')}
							/>
						)}
					/>
					<Hero />
					<View style={styles.prayerCard}>
						<PrayerTime />
					</View>
				</View>

				<View style={styles.container}>
					<View style={styles.menuContainer}>
						<HomeView />
						<CardDoa />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	scrollView: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	container: {
		paddingVertical: 0,
		paddingLeft: 8,
		paddingRight: 8,
	},

	menuContainer: {
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 8,
	},

	prayerCard: {
		position: 'absolute',
		zIndex: 50,
		justifyContent: 'center',
		alignItems: 'center',
		left: screenWidth / 2 - 25, // Center it (assuming width = 50)
		bottom: 40, // Adjust based on UI needs
		width: 50, // Adjust according to Bookmark component size
		height: 55,
	},
});
