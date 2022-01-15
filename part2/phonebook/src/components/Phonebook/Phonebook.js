import React, {useState, useEffect} from 'react';
import Search from './Search.js';
import PersonForm from './PersonForm.js';
import PersonList from './PersonList.js';
import axios from 'axios';

const Phonebook = () => {
    const [persons, setPersons] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const baseUrl = 'http://localhost:3001'
  
    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    }

    const getPersonsHook = () => {
      axios.get(`${baseUrl}/persons`).then(response => setPersons(response.data));
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