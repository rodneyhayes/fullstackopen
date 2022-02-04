import React, {useState, useEffect} from 'react';
import Search from './Search.js';
import PersonForm from './PersonForm.js';
import PersonList from './PersonList.js';
import Notification from '../Notification/Notification.js'

import personService from './persons.js';

import './phonebook.css';

const Phonebook = () => {
    const [persons, setPersons] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('');

    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    }

    const handleDeletePerson = (id) => {
      if(window.confirm("Do you really want to delete this person?")){
        personService.deleteById(id)
          .then(() => {
            setPersons(persons.filter(person => person.id !== id));
            showNotificationMessage('Deleted successfully.', 'success')
          })
          .catch(err => {
            setPersons(persons.filter(person => person.id !== id));
            showNotificationMessage('Failed to delete, record does not exist.', 'error')
          });
      }
    }

    const showNotificationMessage = (message, type) => {
      setNotificationMessage(message);
      setNotificationType(type);

      setTimeout(() => {
        setNotificationMessage('');
        setNotificationType('empty');
      } , 5000);
    }

    useEffect(() => {
      async function getPersonsHook(){
        const records = await personService.getAll();
        setPersons(records);
      }

      getPersonsHook();
    }, []);
  
    return (
      <div className='phonebook'>
        <h2>Phonebook</h2>
        <Notification message={notificationMessage} type={notificationType}/>
        <Search handleSearchChange={handleSearchChange}/>
        <PersonForm persons={persons} setPersons={setPersons} showNotificationMessage={showNotificationMessage}/>
        <PersonList persons={persons} searchInput={searchInput} handleDeletePerson={handleDeletePerson} />
      </div>
    )
}

export default Phonebook;