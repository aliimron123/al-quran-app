import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { BookMarked } from 'lucide-react-native';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('window');
export function Bookmark() {
	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Last Read</Text>
			<View
				style={{ flexDirection: 'row', marginRight: 6, paddingVertical: 10 }}>
				<BookMarked
					size={40}
					color={'#1e0b37'}
					style={{ marginVertical: 'auto' }}
				/>
				<View style={styles.col_section}>
					<Text style={styles.textSurah}>Al-Fatihah</Text>
					<Text style={styles.textDesc}>Ayah No 8</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 6,
		borderColor: '#a84db8',
		paddingVertical: 15,
		paddingHorizontal: 12,
		shadowColor: '#1a061f',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5, // For Android shadow
		fontFamily: 'Almalik',
		flexDirection: 'column',
		alignItems: 'stretch',
		width: width - 20,
		alignSelf: 'center',
	},
	col_section: {
		flexDirection: 'column',
		marginLeft: 12,
	},

	textTitle: {
		fontSize: 15,
		color: '#96529b',
		fontWeight: 500,
	},

	textDesc: {
		fontSize: 15,
		color: '#96529b',
		fontWeight: 700,
	},

	textSurah: {
		fontSize: 25,
		color: '#3f0f48',
		fontWeight: 700,
	},
});
