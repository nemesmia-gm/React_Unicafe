import React from 'react'
import noteService from "../services/notes";

const initialState = [
    { content: 'reducer defines how redux store works', important: true, id: 1, },
    { content: 'state of store can contain any data', important: false, id: 2,  },
];

const noteReducer = (state = [], action) => {
    console.log('ACTION: ', action);
    switch(action.type) {
        case 'NEW_NOTE':
            return state.concat(action.data);

        case 'INIT_NOTES':
            return action.data;

        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id;
            const noteToChange = state.find(n => n.id === id);
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            };
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        }
        default:
            return state
    }
};
/*
const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0));
*/

// Because the backend generates ids for the notes, we'll change the action creator createNote
export const createNote = (content) => {
    return async dispatch => {
        const newNote = await noteService.createNew(content)
        dispatch({
            type: 'NEW_NOTE',
            data: newNote
        })
    }
};

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: { id }
    }
};

/*
export const initializeNotes = (notes) => {
    return {
        type: 'INIT_NOTES',
        data: notes,
    }
}
*/
export const initializeNotes = () => {
    return async dispatch => {
        const notes = await noteService.getAll()
        dispatch({
            type: 'INIT_NOTES',
            data: notes,
        })
    }
}

export default noteReducer

