import axios from 'axios';
import { FETCH_CLIENTS_SUCCESS } from './action_types';

const API_ROOT = 'https://api-react-course.herokuapp.com/api/v1/users';

export function fetchClients() {
  const request = axios.get(`${API_ROOT}`);

  return {
    type: 'FETCH_CLIENTS_SUCCESS',
    payload: request
  }
}
