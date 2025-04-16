import SearchView from '@/components/feature/search/search-view';
import InputSearch from '@/components/input-search';
import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

function index() {
	return (
		<SafeAreaView>
			<Stack.Screen
				options={{ headerShown: true, headerTitle: () => <InputSearch /> }}
			/>
			<SearchView />
		</SafeAreaView>
	);
}

export default index;
