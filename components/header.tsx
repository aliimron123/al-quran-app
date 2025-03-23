import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

interface IProps {
	rightSide?: React.ReactNode | (() => React.ReactNode);
	leftSide?: React.ReactNode | (() => React.ReactNode);
	showLeft?: boolean;
	showRight?: boolean;
}

export function Header({
	rightSide,
	leftSide,
	showLeft = true,
	showRight = true,
}: IProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				{showLeft && (
					<View>{typeof leftSide === 'function' ? leftSide() : leftSide}</View>
				)}
				{showRight && (
					<View>
						{typeof rightSide === 'function' ? rightSide() : rightSide}
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		position: 'absolute',
		paddingTop: 20,
		top: 0,
		width: '100%',
		zIndex: 100, // Ensure it's above other elements
		backgroundColor: 'transparent',
	},

	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: 'transparent', // Change this if needed
	},
});
