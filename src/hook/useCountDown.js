import { useEffect, useState } from 'react';
import { getReturnValues } from '../helpers/count-down';

export const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};
