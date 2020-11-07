import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from "../Part3-Phonebook/App";

const noteReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_NOTE':
            return state.concat(action.data)
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        }
        default:
            return state
    }
};

const store = createStore(noteReducer);

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'the app state is in redux store First',
        important: true,
        id: 1
    }
});

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state changes are made with actions X2',
        important: false,
        id: 2
    }
});
/*
store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    data: {
        id: 2
    }
});*/

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0));


const NoteReducer = () => {
    const addNote = (event) => {
        event.preventDefault();
        const content = event.target.note.value; //Because the field has a name, we can access the content via the event object event.target.note.value.
        event.target.note.value = '';
        store.dispatch({
            type: 'NEW_NOTE',
            data: {
                content,
                important: false,
                id: generateId()
            }
        })
    };

    const toggleImportance = (id) => {
        store.dispatch({
            type: 'TOGGLE_IMPORTANCE',
            data: { id }
        })
    };
    return(
        <div>
            <form onSubmit={addNote}>
                <input name="note" />
                <button type="submit">add</button>
            </form>
            <ul>
                {store.getState().map(note =>
                    <li
                        key={note.id}
                        onClick={() => toggleImportance(note.id)}
                    >
                        {note.content} <strong>{note.important ? 'important' : 'not important'}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
};
const renderApp = () => {
    ReactDOM.render(<NoteReducer />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default NoteReducer;
