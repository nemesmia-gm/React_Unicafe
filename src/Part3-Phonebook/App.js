import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        {id: 0, name: 'Arto Hellas' }
    ]);
    const [ newName, setNewName ] = useState('test');

    const addPerson = (event) => {
        event.preventDefault(); //prevent page reload which is the default behaviour

        const person = {
            name: newName,
            id: persons.length + 1
        };

        const found = persons.find((p) => p.name === newName);

        if(found) {
            alert(`${newName} already exists`);
        }
        else{
            setPersons(persons.concat(person));
        }
        setNewName(''); // clean up the field

    };

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit" >add new person</button>
                </div>
            </form>

            <h2>Numbers</h2>
            {
                persons.map( (person) =>
                    <div key={person.id}>{person.name}  </div>
                )
            }
        </div>
    )
}

export default App
