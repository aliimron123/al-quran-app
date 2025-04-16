// StatusOverlay.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import { Text, ActivityIndicator } from 'react-native';
import { StatusOverlay } from '../status-overlay';

jest.mock('lucide-react-native', () => ({
	CircleX: () => <Text>CircleX Icon</Text>,
	TriangleAlert: () => <Text>TriangleAlert Icon</Text>,
}));

describe('StatusOverlay', () => {
	it('renders loading state with spinner and text', () => {
		const tree = renderer.create(
			<StatusOverlay
				type='loading'
				text='Loading...'
				spinnerColor='#000'
			/>,
		);

		const instance = tree.root;

		expect(instance.findByType(ActivityIndicator)).toBeTruthy();
		expect(instance.findByType(Text).props.children).toBe('Loading...');
	});

	it('renders error state with title and text', () => {
		const tree = renderer.create(
			<StatusOverlay
				type='error'
				title='Error!'
				text='Something went wrong'
			/>,
		);

		const texts = tree.root
			.findAllByType(Text)
			.map((node) => node.props.children);

		expect(texts).toContain('Error!');
		expect(texts).toContain('Something went wrong');
	});

	it('renders info state with title and text', () => {
		const tree = renderer.create(
			<StatusOverlay
				type='info'
				title='FYI'
				text='Just a heads up'
			/>,
		);

		const texts = tree.root
			.findAllByType(Text)
			.map((node) => node.props.children);

		expect(texts).toContain('FYI');
		expect(texts).toContain('Just a heads up');
	});

	it('renders empty state with children', () => {
		const tree = renderer.create(
			<StatusOverlay type='empty'>
				<Text>Nothing here</Text>
			</StatusOverlay>,
		);

		expect(tree.root.findByType(Text).props.children).toBe('Nothing here');
	});
});
