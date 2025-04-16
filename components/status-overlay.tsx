import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { CircleX, TriangleAlert } from 'lucide-react-native';
import { Portal } from 'react-native-paper';

interface Props {
	type?: 'loading' | 'info' | 'error' | 'empty';
	spinnerColor?: string;
	spinnerSize?: number | 'small' | 'large' | undefined;
	children?: React.ReactNode;
	text?: string;
	title?: string;
}

export function StatusOverlay({
	type = 'empty',
	children,
	text,
	spinnerColor,
	spinnerSize = 'small',
	title,
}: Props) {
	switch (type) {
		case 'empty':
			return (
				<Portal>
					<SafeAreaView style={styles.overlay}>
						<View style={styles.card}>{children}</View>
					</SafeAreaView>
				</Portal>
			);
		case 'loading':
			return (
				<Portal>
					<SafeAreaView style={styles.overlay}>
						<View style={styles.card}>
							<ActivityIndicator
								size={spinnerSize}
								color={spinnerColor}
							/>
							<Text style={styles.text}>{text}</Text>
						</View>
					</SafeAreaView>
				</Portal>
			);
		case 'info':
			return (
				<SafeAreaView style={styles.overlay}>
					<View style={styles.card}>
						<TriangleAlert
							size={30}
							color={'#f0ff00'}
						/>
						<Text style={styles.text}>{title}</Text>
					</View>
					<View style={{ marginTop: 8 }}>
						<Text style={styles.text}>{text}</Text>
					</View>
				</SafeAreaView>
			);
		case 'error':
			return (
				<SafeAreaView style={styles.overlay}>
					<View style={styles.card}>
						<CircleX
							size={30}
							color={'#ff0000'}
						/>
						<Text style={styles.text}>{title}</Text>
					</View>
					<View style={{ marginTop: 8 }}>
						<Text style={styles.text}>{text}</Text>
					</View>
				</SafeAreaView>
			);

		default:
			break;
	}
}

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.5)', // silhouette background
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 50,
	},

	card: {
		borderRadius: 8,
		backgroundColor: 'white',
		paddingVertical: 20,
		paddingHorizontal: 40,
		elevation: 5, // for Android shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		flexDirection: 'row',
		gap: 8,
	},

	text: {
		fontSize: 14,
		textAlign: 'center',
		marginVertical: 'auto',
	},
});
