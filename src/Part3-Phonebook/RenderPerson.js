import React from "react";

const RenderPerson = ({person}) => {
    return (
        <div>{person.name} {person.telefon} </div>
    )
};

export default RenderPerson;
