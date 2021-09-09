import axios from 'axios';

const api = axios.create({
	// baseURL: 'https://api-fast-remedy-org.herokuapp.com/',
    baseURL: 'http://localhost:3335/'
});

// api.interceptors.request.use(config => {
// 	try {
// 		const token = localStorage.getItem('token');
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	} catch (err) {
// 		console.log('apiToken: ' + err.message);
//         return 'Error'
// 	}
// });

export default api;
