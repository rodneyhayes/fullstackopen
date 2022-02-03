import React, {useState} from 'react';
import personService from './persons.js';

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
  
    const handleNameChange = (event) => {
      setNewName(event.target.value);
    }
  
    const handlePhoneNumberChange = (event) => {
      setNewPhoneNumber(event.target.value);
    }

    const findExistingPersonByName = (name) => {
      return persons.find(person => person.name === name);
    }

    const handleAddPerson = async (event) => {
      event.preventDefault();

      const existingPerson = findExistingPersonByName(newName);

      if(!!existingPerson){
        if(window.confirm(`${newName} is already in the phonebook. Would you like to replace the current phone number?`)){
          personService.update(existingPerson.id, {...existingPerson, number: newPhoneNumber}).then(updatedPerson => setPersons(persons.map(person => person.id != existingPerson.id ? person : updatedPerson)));
        }
      }
      else{
        const person = {name: newName, number: newPhoneNumber};
        personService.create(person).then(newPerson => setPersons([...persons, newPerson]));
      }
    }
  
    return (
      <form>
        <h3>Add</h3>
        <div>
          Name: <input id="nameInput" onChange={handleNameChange}/><br/>
          Phone number: <input id="phoneInput" onChange={handlePhoneNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>Add</button>
        </div>
      </form>
    )
}
  
export default PersonForm;