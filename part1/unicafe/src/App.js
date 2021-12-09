import React, {useState} from 'react';

const Button = ({handleEvent, text}) => {
	return (
		<>
			<button onClick={handleEvent}>{text}</button>
		</>
	)
}

const StatisticLine = ({text, value}) => {
	return (
		<>
			{text}: {value}<br/>
		</>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const getTotalFeedbackCount = () => {
		return good + neutral + bad;
	}

	const getAverageScore = () => {
		return (good - bad) / getTotalFeedbackCount();
	}

	const getPositivePercentage = () => {
		return (good / getTotalFeedbackCount()) * 100;
	}

	if(getTotalFeedbackCount() === 0){
		return (
			<div>
				<h3>Statistics</h3>
				<p>No feedback given</p>
			</div>
		)
	}

	return (
		<div>
			<h3>Statistics</h3>
			<StatisticLine text="Good" value={good}/>
			<StatisticLine text="Neutral" value={neutral}/>
			<StatisticLine text="Bad" value={bad}/>
			<StatisticLine text="All" value={getTotalFeedbackCount()}/>
			<StatisticLine text="Average" value={getAverageScore()}/>
			<StatisticLine text="Positive" value={getPositivePercentage()}/>
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<div>
				<h3>Give Feedback</h3>
				<Button handleEvent={() => setGood(good + 1)} text="Good"/>
				<Button handleEvent={() => setNeutral(neutral + 1)} text="Neutral"/>
				<Button handleEvent={() => setBad(bad + 1)} text="Bad"/>
			</div>
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</>
	)
}

export default App;