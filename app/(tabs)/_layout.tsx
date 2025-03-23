import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import {
	House,
	History,
	AlarmClock,
	BookOpen,
	HandHelping,
	BookMarked,
} from 'lucide-react-native';
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
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
					},
					default: {},
				}),
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Read Qu`ran',
					tabBarIcon: ({ color }) => (
						<BookOpen
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='explore'
				options={{
					title: 'Shalat',
					tabBarIcon: ({ color }) => (
						<AlarmClock
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='doa'
				options={{
					title: 'Do`a',
					tabBarIcon: ({ color }) => (
						<HandHelping
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
