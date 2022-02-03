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

    const personExists = (name) => {
      return !!persons.find(person => person.name === name);
    }

    const handleAddPerson = async (event) => {
      event.preventDefault();

      if(personExists(newName)){
        alert(`${newName} was already added to the phone book!`);
      }
      else{
        const person = {name: newName, number: newPhoneNumber};
        const personRecord = await personService.create(person);
        setPersons([...persons, personRecord]);
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