import React from 'react';

const Course = ({course}) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total parts={course.parts} />
		</div>
	)
}

const Header = ({ course }) => {
	return (
		<h1>{course.name}</h1>
	)
}

const Total = ({ parts }) => {
	const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
	return (
		<p>Total number of exercises: {sum}</p>
	)
}

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	)
}

const Content = ({ course }) => {
	return (
		<div>
			{course.parts.map(part => <Part key={part.id} part={part}/>)}
		</div>
	)
}

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack Application Development',
		parts: [
			{
				id: 1,
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				id: 2,
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				id: 3,
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	return (
		<>
			<Course course={course}/>
		</>
	)
}

export default App;