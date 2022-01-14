import React, {useState} from 'react';

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

    const getNewId = () => {
      return persons.length > 0 ? persons[persons.length - 1].id + 1 : 1;
    }
  
    const handleAddPerson = (event) => {
      event.preventDefault();
      if(personExists(newName)){
        alert(`${newName} was already added to the phone book!`);
      }
      else{
        const id = getNewId();
        setPersons([...persons, {name: newName, number: newPhoneNumber, id: id}]);
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