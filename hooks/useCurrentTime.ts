import { useState, useEffect } from 'react';

const useCurrentTime = () => {
	const [currentTime, setCurrentTime] = useState('');
	const [showColon, setShowColon] = useState(true); // Toggle colon visibility

	useEffect(() => {
		// Function to update time
		const updateTime = () => {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
			setCurrentTime(formattedTime);
		};

		// Set interval to update time every second for blinking effect
		const interval = setInterval(() => {
			updateTime();
			setShowColon((prev) => !prev); // Toggle colon visibility
		}, 1000);

		updateTime(); // Call immediately to set initial time

		// Cleanup function
		return () => clearInterval(interval);
	}, []);

	return { currentTime, showColon };
};

export default useCurrentTime;
