import React, { useState, useEffect } from 'react'
import SearchFilter from "./searchFilter";
import AddNewPerson from "./AddNewPerson";
import RenderPersons from "./RenderPersons";
import personService from './services/persons'
import Notification from "./Notification";
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const App = () => {
    const [ persons, setPersons ] = useState([]);
    const [ newName, setNewName ] = useState('');
    const [ newTelefon, setNewTelefon ] = useState(0);
    const [ filterByName, setFilterByName ] = useState('');
    const [ notification, setNotification ] = useState({
        message: null,
        color: 'green'
    });

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleTelefonChange = (event) => {
        setNewTelefon(event.target.value)
    };

    const handleFilterChange = (event) => {
        setFilterByName(event.target.value)
    };

    const showNotification = (newNotification) =>{
        setNotification( {
            message: newNotification.message,
            color: newNotification.color
        });

        setTimeout(() => {
            setNotification( {
                message:null,
                color:null
            })
        }, 5000)
    };

    const addPerson = (event) => {
        event.preventDefault(); //prevent page reload which is the default behaviour

        const person = {
            id: persons.length + 1,
            name: newName,
            telefon: newTelefon
        };

        const found = persons.find((p) => p.name === newName);

        if(found) {
            if( window.confirm(`${newName} is already added to phonebook. Replace the old number with the new one? `)){
                const changedPerson = { ...found, telefon: newTelefon };
                personService
                    .update(found.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== found.id ? p : returnedPerson))
                    });

                showNotification({ message:'Person changed', color:'blue'});
               }
            }
        else {
            personService.create(person);
            setPersons(persons.concat(person));

            showNotification({ message:'Person added', color:'green'});
        }
        setNewName(''); // clean up the field
        setNewTelefon('');
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
                    .catch( error => {
                        showNotification({ message:'`Information on ${person.name} has already been removed from server`)', color:'red'});
                    })
            })
       // setNotificationMessage('Person deleted.');
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
            <Notification message={notification.message} color={notification.color} />
            <SearchFilter filter={filterByName} handleFilterChange={handleFilterChange}/>
            <AddNewPerson newName={newName}
                          newTelefon={newTelefon}
                          handleNameChange={handleNameChange}
                          handleTelefonChange={handleTelefonChange}
                          handleAddPerson={addPerson}/>
            <RenderPersons persons={persons} filterByName={filterByName} onclick={deleteEntry}/>
            <div>
                <div>
                    {store.getState()}
                </div>
                <button
                    onClick={e => store.dispatch({ type: 'INCREMENT' })}
                >
                    plus
                </button>
                <button
                    onClick={e => store.dispatch({ type: 'DECREMENT' })}
                >
                    minus
                </button>
                <button
                    onClick={e => store.dispatch({ type: 'ZERO' })}
                >
                    zero
                </button>
            </div>
        </div>
    )
}
const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default App
