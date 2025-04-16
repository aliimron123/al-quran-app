import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface SkeletonProps {
	size?: 'small' | 'medium' | 'large';
	type?: 'circle' | 'square' | 'rectangle';
	width?: number;
	height?: number;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({
	size = 'medium',
	type = 'rectangle',
	width,
	height,
}) => {
	// Animation for shimmer effect
	const shimmerAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const shimmerLoop = Animated.loop(
			Animated.sequence([
				Animated.timing(shimmerAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(shimmerAnim, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			]),
		);

		shimmerLoop.start();
		return () => shimmerLoop.stop();
	}, []);

	// Size mapping
	const sizeMap = {
		small: 40,
		medium: 60,
		large: 80,
	};

	// Get computed dimensions
	const computedWidth = width || sizeMap[size];
	const computedHeight = height || (type === 'circle' ? computedWidth : 20);

	// Styles for shimmer effect
	const shimmerStyle = {
		opacity: shimmerAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [0.3, 1],
		}),
	};

	return (
		<Animated.View
			style={[
				styles.skeleton,
				{ width: computedWidth, height: computedHeight },
				type === 'circle' && { borderRadius: computedWidth / 2 },
				shimmerStyle,
			]}
		/>
	);
};

const styles = StyleSheet.create({
	skeleton: {
		borderRadius: 8,
		backgroundColor: '#ebebeb',
	},
});
