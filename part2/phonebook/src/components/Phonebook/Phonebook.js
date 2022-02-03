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

    const handleDeletePerson = (id) => {
      if(window.confirm("Do you really want to delete this person?")){
        personService.deleteById(id).then(setPersons(persons.filter(person => person.id !== id)));
      }
    }

    useEffect(() => {
      async function getPersonsHook(){
        const records = await personService.getAll();
        setPersons(records);
      }

      getPersonsHook();
    }, []);
  
    return (
      <div>
        <h2>Phonebook</h2>
        <Search handleSearchChange={handleSearchChange}/>
        <PersonForm persons={persons} setPersons={setPersons}/>
        <PersonList persons={persons} searchInput={searchInput} handleDeletePerson={handleDeletePerson}/>
      </div>
    )
}

export default Phonebook;