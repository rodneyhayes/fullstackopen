import React, {useState, useEffect} from 'react';
import Search from './Search.js';
import PersonForm from './PersonForm.js';
import PersonList from './PersonList.js';

import personService from './persons.js';

const Phonebook = () => {
    const [persons, setPersons] = useState([]);
    const [searchInput, setSearchInput] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    }

    const getPersonsHook = async () => {
      const records = await personService.get();
      setPersons(records);
    }

    useEffect(getPersonsHook, []);
  
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