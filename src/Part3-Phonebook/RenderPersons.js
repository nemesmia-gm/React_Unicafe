import React from "react";
import RenderPerson from "./RenderPerson";


const RenderPersons = ({persons, filterByName, onclick}) => {
    return (
        <div>
        <h2>Numbers</h2>
        {
            persons.filter( (p) => p.name.toLowerCase().includes(filterByName.toLowerCase()))
                .map( (person) =>
                    <RenderPerson key={person.id} person={person} onclick={ () => {onclick(person) }}/>
                )
        }
        </div>
    )
};

export default RenderPersons;
