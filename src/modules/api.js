import axios from 'axios';

const api = axios.create({
	baseURL: 'http://cart.brutgroot.com/api/orders',
});

export default api;