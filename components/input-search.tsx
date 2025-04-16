// components/SearchHeader.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function InputSearch() {
	const [search, setSearch] = useState('');

	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Cari..'
				value={search}
				onChangeText={setSearch}
				style={styles.input}
				placeholderTextColor='#888'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		fontSize: 16,
		flex: 1,
	},
});
