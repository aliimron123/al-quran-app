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
		Marhaban: require('../assets/fonts/Marhaban.ttf'),
		Uthmani: require('../assets/fonts/Uthmani.ttf'),
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
			<SafeAreaProvider>
				<PaperProvider>
					<Stack>
						<Stack.Screen
							name='(tabs)'
							options={{ headerShown: false }}
						/>
						<Stack.Screen name='[ayat]' />
						<Stack.Screen name='+not-found' />
					</Stack>
					<StatusBar style='auto' />
				</PaperProvider>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}
