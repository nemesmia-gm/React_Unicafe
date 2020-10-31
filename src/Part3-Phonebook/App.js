import React, { useState, useEffect } from 'react'
import SearchFilter from "./searchFilter";
import AddNewPerson from "./AddNewPerson";
import RenderPersons from "./RenderPersons";
import personService from './services/persons'

const App = () => {
    const [ persons, setPersons ] = useState([]);
    const [ newName, setNewName ] = useState('');
    const [ newTelefon, setNewTelefon ] = useState(0);
    const [ filterByName, setFilterByName ] = useState('');

    const addPerson = (event) => {
        event.preventDefault(); //prevent page reload which is the default behaviour

        const person = {
            id: persons.length + 1,
            name: newName,
            telefon: newTelefon
        };

        const found = persons.find((p) => p.name === newName);

        if(found) {
            alert(`${newName} already exists`);
        }
        else {
            personService.create(person);
            setPersons(persons.concat(person));
        }
        setNewName(''); // clean up the field
        setNewTelefon('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleTelefonChange = (event) => {
        setNewTelefon(event.target.value)
    };

    const handleFilterChange = (event) => {
        setFilterByName(event.target.value)
    };

    const deleteEntry = (person) => {
        if( !window.confirm(`Delete ${person.name}?`)) {
           return;
        }
        const responseData = personService.deletePerson(person.id)
            .then( () => {
                personService
                    .getAll()
                    .then( loadedPersons => {
                        setPersons(loadedPersons)
                    })
            })
        console.log(`Response from delete is: ${responseData}`);
    };

    useEffect( () => {
        personService
            .getAll()
            .then( loadedPersons => {
                setPersons(loadedPersons)
            })
        },[]);

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter filter={filterByName} handleFilterChange={handleFilterChange}/>
            <AddNewPerson newName={newName}
                          newTelefon={newTelefon}
                          handleNameChange={handleNameChange}
                          handleTelefonChange={handleTelefonChange}
                          handleAddPerson={addPerson}/>
            <RenderPersons persons={persons} filterByName={filterByName} onclick={deleteEntry}/>
        </div>
    )
}

export default App
