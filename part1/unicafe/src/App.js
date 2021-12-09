import React, {useState} from 'react';

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const getTotalFeedbackCount = () => {
		return good + neutral + bad;
	}

	const getAverageScore = () => {
		return (good - bad) / getTotalFeedbackCount();
	}

	const getPositivePercentage = () => {
		return (good / getTotalFeedbackCount()) * 100;
	}

	return (
		<>
			<div>
				<h3>Give Feedback</h3>
				<button onClick={() => setGood(good + 1)}>Good</button>
				<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
				<button onClick={() => setBad(bad + 1)}>Bad</button>
			</div>
			<div>
				<h3>Statistics</h3>
				Good: {good}<br/>
				Neutral: {neutral}<br/>
				Bad: {bad}<br/>
				All: {getTotalFeedbackCount()}<br/>
				Average: {getAverageScore()}<br/>
				Positive: {getPositivePercentage()}<br/>
			</div>
		</>
	)
}

export default App;