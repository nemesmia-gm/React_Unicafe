
import React, {useEffect, useState} from "react";
import axios from 'axios';
import CountryDetails from "./CountryDetails";

const App = () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchCountries = () => {
        axios
            .get(url)
            .then( response => {
                setCountries(response.data)
            })
    }

    useEffect(fetchCountries, [])

    let filteredCountries =
        countries.filter( (country) => country.name.toLowerCase().includes(filter.toLowerCase()));

    let filterCount = filteredCountries.length;

    const handleFilterChange = (event) =>{
        setFilter(event.target.value)
    }

    const showCountryDetail = (country) => {
        setFilter(country.name);
    }

    return (
        <div>
            search countries:
            <input value={filter} onChange={handleFilterChange} />
            {
                (filterCount === 1)
                    ? <CountryDetails country={filteredCountries[0]}/>
                    : (filterCount > 10)
                            ? <div>Too many matches {filterCount} </div>
                            : <div>
                                {
                                    filteredCountries.map((country) =>
                                        <div key={country.name}>
                                            {country.name}
                                            <button onClick={() => showCountryDetail(country)}>show</button>
                                        </div>
                                    )
                                }
                                </div>
            }
        </div>
    )
}

export default App
