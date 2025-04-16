import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { MoveRight } from 'lucide-react-native';

export default function LastRead() {
	return (
		<View style={styles.container}>
			<View style={styles.row_section}>
				<View style={{ marginVertical: 'auto' }}>
					<Text style={styles.textHead}>Terkahir Dibaca</Text>
					<Text style={styles.textSurah}>Al-Fatihah</Text>
					<Text style={styles.textNumber}>Ayat No: 5</Text>
					<Button
						style={{ marginVertical: 18 }}
						icon={() => (
							<MoveRight
								size={24}
								color={'#8058ac'}
							/>
						)}
						mode='elevated'
						contentStyle={{ flexDirection: 'row-reverse' }}
						onPress={() => console.log('Pressed')}>
						Lanjutkan Bacaan
					</Button>
				</View>
				<Image
					source={require('@/assets/images/quran.png')} // Correct relative path
					style={{ width: 100, height: 120 }} // Use style for width/height
				/>
			</View>

			<Divider bold />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		fontFamily: 'Roboto',
		paddingVertical: 4,
		paddingHorizontal: 8,
	},
	row_section: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textHead: {
		fontSize: 16,
		fontWeight: 500,
		fontFamily: 'Roboto',
		marginBottom: 8,
	},
	textSurah: { fontSize: 22, fontWeight: 700 },
	textNumber: { fontSize: 14, fontWeight: 400, marginVertical: 2 },
});
