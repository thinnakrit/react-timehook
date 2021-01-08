import { useState, useRef, useEffect } from 'react'
// ---

export default useTimer = (
	/** useTimer
	 * @param {Number} initialTimer set start timer
	 */
	{ initialTimer, mode }
) => {
	const clockCall = useRef(null)
	const [timer, setTimer] = useState(initialTimer)

	const handleStartTimer = () => {
		clockCall.current = setInterval(() => {
			decrementClock()
		}, 1000)
	}

	const decrementClock = () => {
		if (timer === 0) {
			clearInterval(clockCall.current)
		}
		setTimer((prevTimer) => prevTimer - 1)
	}

	const handleResetTimer = (newTimer) => {
		setTimer(newTimer ? newTimer : initialTimer)
		handleStartTimer()
	}

	useEffect(() => {
		return () => {
			if (mode === 'COUNTDOWN_SECOND') {
				clearInterval(clockCall.current)
			}
		}
	}, [])

	if (mode === 'COUNTDOWN_SECOND') {
		return {
			currentTimer: timer,
			isFinish: timer === 0,
			onStartTimer: handleStartTimer,
			onResetTimer: handleResetTimer,
		}
	} else {
		return {}
	}
}
