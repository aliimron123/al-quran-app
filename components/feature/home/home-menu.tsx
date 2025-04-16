import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import ListMenu from './menu'; // Import your ListMenu component
import LastRead from './last-read'; // Import LastRead component

function HomeMenu() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.header}>Semua Fitur</Text>
				<ListMenu />
			</View>

			<View style={styles.section}>
				<LastRead />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 10,
	},
	section: {
		marginBottom: 12,
	},
	header: {
		fontSize: 18,
		fontWeight: '700',
		padding: 6,
		marginBottom: 8,
	},
});

export default HomeMenu;
