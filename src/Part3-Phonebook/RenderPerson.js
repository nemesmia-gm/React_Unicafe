import React from "react";

const RenderPerson = ({person, onclick}) => {
    return (
        <div>
            {person.name} {person.telefon}
            <button onClick={onclick}>delete</button>
        </div>
    )
};

export default RenderPerson;
