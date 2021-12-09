import React from 'react';

function Header(props){
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

function Content(props){
  return (
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </>
  )
}

function Part(props){
  return (
    <>
      <p>
        Part name:{props.part.name}
        <br/>
        Exercise count:{props.part.exercises}
      </p>
    </>
  )
}

function Total(props){
  return (
    <>
      <p>Total number of exercises: {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App