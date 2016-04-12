import axios from 'axios';
import {
	FETCH_USERS
} from './types';

export function fetchUsers() {
	//Use Axios to make AJAX request to api
	const request = axios.get('http://jsonplaceholder.typicode.com/users');
	return {
		type: FETCH_USERS,
		payload: request
	};
}