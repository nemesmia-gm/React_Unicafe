
import React, {useEffect, useState} from "react";
import RenderCountries from "./RenderCountries";
import axios from 'axios';

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

    return (
        <div>
            <div>find countries </div>
            <input value={filter} onChange={handleFilterChange}/>
            {
                (filterCount > 10)
                ? <div>Too many matches {filterCount} </div>
                : <RenderCountries countries={filteredCountries}
                    />
            }
        </div>
    )
}

export default App
