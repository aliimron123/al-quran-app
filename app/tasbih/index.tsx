import HeadTasbih from '@/components/feature/tasbih/head-tasbih';
import TasbihTools from '@/components/feature/tasbih/tasbih-tools';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

function TasbihView() {
	return (
		<SafeAreaView>
			<HeadTasbih />
			<TasbihTools />
		</SafeAreaView>
	);
}

export default TasbihView;
