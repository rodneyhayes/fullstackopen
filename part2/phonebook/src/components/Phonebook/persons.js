import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const get = () => {
    return axios.get(`${baseUrl}`).then(res => res.data);
}

const create = (person) => {
    return axios.post(`${baseUrl}`, person).then(res => res.data);
}

export default {get, create}