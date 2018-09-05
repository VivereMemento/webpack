import api from './api';

const DEFAULT_USER_ID = 1;

export async function getOrders(userId = DEFAULT_USER_ID) {
	const { data } = await api.get();
	return data;
};