import React, { useState, useEffect } from 'react'
import SearchFilter from "./searchFilter";
import AddNewPerson from "./AddNewPerson";
import RenderPersons from "./RenderPersons";
import axios from 'axios';

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
        else{
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

    const hook = () => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            });
    };

    return (
        <div>
            {
               useEffect(hook, [])
            }
            <h2>Phonebook</h2>
            <SearchFilter filter={filterByName} handleFilterChange={handleFilterChange}/>
            <AddNewPerson newName={newName}
                          newTelefon={newTelefon}
                          handleNameChange={handleNameChange}
                          handleTelefonChange={handleTelefonChange}
                          handleAddPerson={addPerson}/>
            <RenderPersons persons={persons} filterByName={filterByName}/>
        </div>
    )
}

export default App
