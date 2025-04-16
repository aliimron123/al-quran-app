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

			// Ensure both hours and minutes have leading zeros
			const formattedHours = hours < 10 ? `0${hours}` : hours;
			const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

			setCurrentTime(`${formattedHours}:${formattedMinutes}`);
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
