import { Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

function HeadTasbih() {
	return (
		<Stack.Screen
			name='tasbih/index'
			options={{
				headerShown: true,
				headerTitle: 'Tasbih',
			}}
		/>
	);
}

export default HeadTasbih;
