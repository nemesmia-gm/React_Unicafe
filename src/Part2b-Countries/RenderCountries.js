import React from "react";
import CountryDetails from "./CountryDetails";

const RenderCountries = ({countries}) => {
    return (
        <div>
            {
                countries.map( (country) =>
                    <CountryDetails key={country.name} country={country} />
                )
            }
        </div>
    )
}

export default RenderCountries
