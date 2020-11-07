import {
    useParams
} from "react-router-dom"
import React from "react";

const Note = ({ notes }) => {
    const id = useParams().id;
    const note = notes.find(n => n.id === Number(id));
    return (
        <div>
            <h2>{note.content}</h2>
            <div>{note.user}</div>
            <div><strong>{note.important ? 'important' : 'not important'}</strong></div>
        </div>
    )
}

export default Note
