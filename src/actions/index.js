import axios from 'axios';
import { FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_ERROR, FETCH_CLIENTS } from './action_types';

const API_ROOT = 'https://api-react-course.herokuapp.com/api/v1/users';

export function fetchClients() {
  const request = axios.get(`${API_ROOT}`);

  return {
    type: 'FETCH_CLIENTS_SUCCESS',
    payload: request
  }
}

export function fetchClient(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCH_CLIENT' });

    axios.get(`${API_ROOT}/${id}`)
      .then(response => {
        dispatch({
          type: 'FETCH_CLIENT_SUCCESS',
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_CLIENT_ERROR',
          payload: error
        })
      });
  }
}
