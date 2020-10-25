import React from "react";

const CountryDetails = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>Capital {country.capital}</div>
            <div>Population {country.population}</div>
            <h2>Languages</h2>
            {
                country.languages.map((language) =>
                    <li key={language.name}>{language.name}</li>
                )
            }
            <img src={country.flag} width={100} height={100}/>

        </div>
    )
}

export default CountryDetails
