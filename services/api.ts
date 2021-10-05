import axios from 'axios';

const api = axios.create({
	baseURL: 'https://fast-remedy-api.herokuapp.com',
});

export default api;
