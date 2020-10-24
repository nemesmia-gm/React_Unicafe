import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        {id: 0, name: 'Arto Hellas', telefon: '0715225656' }
    ]);
    const [ newName, setNewName ] = useState('');
    const [ newTelefon, setNewTelefon ] = useState(0);


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

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    Telefon: <input value={newTelefon} onChange={handleTelefonChange}/>

                </div>
                <div>
                    <button type="submit" >add new person</button>
                </div>
            </form>

            <h2>Numbers</h2>
            {
                persons.map( (person) =>
                    <div key={person.id}>{person.name} {person.telefon} </div>
                )
            }
        </div>
    )
}

export default App
