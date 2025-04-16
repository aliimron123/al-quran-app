import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { House, BookOpen, BookMarked } from 'lucide-react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarButton: HapticTab,
				tabBarActiveTintColor: 'purple',
				tabBarBackground: TabBarBackground,
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						position: 'absolute',
					},
					default: {},
				}),
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<House
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='quran'
				options={{
					headerShown: true,
					title: 'Qur`an',
					tabBarIcon: ({ color }) => (
						<BookOpen
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='bookmark'
				options={{
					title: 'Bookmark',
					tabBarIcon: ({ color }) => (
						<BookMarked
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
