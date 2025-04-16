import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

function TasbihTools() {
	const [counter, setCounter] = useState(0); // default 0

	const handleIncrement = () => {
		setCounter((prev) => (prev ?? 0) + 1);
	};

	const handleDecrement = () => {
		setCounter((prev) => {
			const newValue = (prev ?? 0) - 1;
			return newValue <= 0 ? 0 : newValue;
		});
	};

	const resetCounter = () => {
		setCounter(0);
	};

	return (
		<View>
			<Text style={{ fontSize: 24 }}>{counter}</Text>
			<Button
				title='Tambah'
				onPress={handleIncrement}
			/>
			<Button
				title='Kurang'
				onPress={handleDecrement}
			/>
		</View>
	);
}

export default TasbihTools;
