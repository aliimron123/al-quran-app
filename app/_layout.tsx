import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import { AppStateStatus, Platform } from 'react-native';
import { QueryClientProvider, focusManager } from '@tanstack/react-query';
import { useAppState } from '@/hooks/useAppState';
import { useOnlineManager } from '@/hooks/useOnlineManager';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from '@/service/config/queryClient';
import { LocationProvider } from '@/provider/location-provider';
import './global.css';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
	// React Query already supports in web browser refetch on window focus by default
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active');
	}
}

export default function RootLayout() {
	useAppState(onAppStateChange);
	useOnlineManager();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		Almalik: require('../assets/fonts/Almalik.ttf'),
		Uthmani: require('../assets/fonts/Uthmani.ttf'),
		Roboto: require('../assets/fonts/Roboto.ttf'),
		Amari: require('../assets/fonts/AmiriQuran.ttf'),
		AlMajid: require('../assets/fonts/Al-Majid.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<LocationProvider>
				<SafeAreaProvider>
					<PaperProvider>
						<Stack>
							<Stack.Screen
								name='(tabs)'
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name='read'
								options={{ headerShown: false }}
							/>
							<Stack.Screen name='doa/index' />
							<Stack.Screen name='adzan/index' />
							<Stack.Screen name='kiblat/index' />
							<Stack.Screen name='hadist/index' />
							<Stack.Screen
								name='search/index'
								options={{ headerShown: false }}
							/>
							<Stack.Screen name='+not-found' />
						</Stack>
						<StatusBar style='auto' />
					</PaperProvider>
				</SafeAreaProvider>
			</LocationProvider>
		</QueryClientProvider>
	);
}
