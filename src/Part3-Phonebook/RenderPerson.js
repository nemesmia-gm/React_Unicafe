import React from "react";

const RenderPerson = ({person, onclick}) => {
    return (
        <li className="person">
            {person.name} {person.telefon}
            <button onClick={onclick}>delete</button>
        </li>
    )
};

export default RenderPerson;
