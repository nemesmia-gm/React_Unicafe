
import React, {useEffect, useState} from "react";
import axios from 'axios';
import CountryDetails from "./CountryDetails";

const App = () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [filterCount, setFilterCount] = useState(0);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const fetchCountries = () => {
        axios
            .get(url)
            .then( response => {
                setCountries(response.data)
            })
    }

    useEffect(fetchCountries, [])

    const handleFilterChange = (event) =>{
        setFilter(event.target.value)

        let filtered = countries
            .filter( (country) => country.name.toLowerCase().includes(event.target.value.toLowerCase()));

        setFilterCount(filtered.length);
        setFilteredCountries(filtered);
    }

    const showCountryDetail = (country) => {
        setFilter(country.name)
    }

    return (
        <div>
            <div>find countries </div>
            <input value={filter} onChange={handleFilterChange}/>
            {
                (filterCount === 1)
                    ? <CountryDetails country={filteredCountries[0]}/>
                    : (filterCount > 10)
                            ? <div>Too many matches {filterCount} </div>
                            : <div>
                                {
                                    filteredCountries.map((country) =>
                                        <>
                                        <div key={country.name}> {country.name} </div>
                                        <button onClick={() => showCountryDetail(country)}>show</button>
                                        </>
                                    )
                                }
                                </div>
            }
        </div>
    )
}

export default App
