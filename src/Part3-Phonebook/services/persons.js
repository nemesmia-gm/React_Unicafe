import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios
        .get(baseUrl)
        .then( response => response.data )
};

const create = (newPerson) => {
    return axios
        .post( baseUrl, newPerson )
        .then( response => response.data )
};

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then( response => response.data)
        .catch( error => {
            console.log(`Error: ${error}`)
        })
};

const update = (id, person) => {
    return axios
        .put( `${baseUrl}/${id}`, person)
        .then( response => response.data) // response is the changed data
};

export default {
    getAll,
    create,
    deletePerson,
    update
};

