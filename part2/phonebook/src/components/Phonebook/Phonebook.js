import React, {useState} from 'react';
import Search from './Search.js';
import PersonForm from './PersonForm.js';
import PersonList from './PersonList.js';

const Phonebook = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]) 
    
    const [searchInput, setSearchInput] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Search handleSearchChange={handleSearchChange}/>
        <PersonForm persons={persons} setPersons={setPersons}/>
        <PersonList persons={persons} searchInput={searchInput}/>
      </div>
    )
}

export default Phonebook;