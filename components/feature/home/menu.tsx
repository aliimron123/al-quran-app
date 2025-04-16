import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import {
	Speech,
	HandHelping,
	MapPinHouse,
	BookHeartIcon,
	LassoIcon,
} from 'lucide-react-native';
import { router } from 'expo-router';

const data = [
	{
		label: 'Tasbih',
		link: '/tasbih' as const,
		Icons: LassoIcon,
	},
	{
		label: 'Adzan',
		link: '/adzan' as const,
		Icons: Speech,
	},
	{
		label: 'Do`a',
		link: '/doa' as const,
		Icons: HandHelping,
	},
	{
		label: 'Kiblat',
		link: '/kiblat' as const,
		Icons: MapPinHouse,
	},
	{
		label: 'Hadist',
		link: '/hadist' as const,
		Icons: BookHeartIcon,
	},
];

function ListMenu() {
	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				{data.map((val, index) => (
					<View key={index}>
						<TouchableHighlight>
							<IconButton
								mode='contained-tonal'
								icon={(props) => (
									<val.Icons
										{...props}
										color={'#fff'}
										size={20}
									/>
								)}
								containerColor='#451e5d'
								size={38}
								onPress={() => router.push(val.link)}
							/>
						</TouchableHighlight>
						<Text style={styles.textMenu}>{val.label}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

export default ListMenu;

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	textHead: {
		fontSize: 20,
		fontWeight: 700,
		marginBottom: 20,
		fontFamily: 'manrope',
	},
	textMenu: {
		textAlign: 'center',
		fontWeight: 600,
		fontSize: 14,
		color: 'black',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 4,
		justifyContent: 'space-between',
	},
});
