import React from 'react';

const PersonList = ({persons, searchInput, handleDeletePerson}) => {

  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(searchInput)).map(person => {
          return (
            <li key={person.id}>
              {person.id}: {person.name} - {person.number} <button type="button" onClick={() => handleDeletePerson(person.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PersonList;