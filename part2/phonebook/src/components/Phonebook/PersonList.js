import React from 'react';

const PersonList = ({persons, searchInput}) => {
    return (
      <div>
        <h3>Numbers</h3>
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(searchInput)).map(person => <li key={person.id}>{person.id}: {person.name} - {person.number}</li>)}
        </ul>
      </div>
    )
}

export default PersonList;