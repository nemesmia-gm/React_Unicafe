import React, {useEffect, useState} from "react";
import axios from "axios";

const CountryDetails = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`;
    const [wetherResponse, setWetherResponse] = useState({
        temperature:'',
        weather_icons:'',
        wind_speed:'',
        wind_dir:''
    })

    useEffect(() =>{
            axios
                .get(url)
                .then( response => {
                    console.log(response.data.current)
                    setWetherResponse( response.data.current)
                })
        },
        []
   )

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

            <h2>Wether in {country.capital}</h2>
            <div>temperature: {wetherResponse.temperature} celsius</div>
            <img src={wetherResponse.weather_icons[0]} width={100} height={100}/>
            <div>wind {wetherResponse.wind_speed} direction {wetherResponse.wind_dir}</div>

        </div>
    )
}

export default CountryDetails


/***($env:REACT_APP_API_KEY='1cdc46ba55a1f0ec1d0d1cb78b528db5') -and (npm start)****/
