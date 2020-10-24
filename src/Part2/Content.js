import React from "react";
import Part from "./Part";
import Total from "./Total";


const Content = ({parts}) => {

    const sum = parts.reduce( (sum, p) => sum + p.exercises, 0);

    return (
        <div>
            {
                parts.map( (part) =>
                <Part name={part.name} exercises={part.exercises}/>
                )
            }
           
            <Total total={sum} />
        </div>
    )
};

export default Content
