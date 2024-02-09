import axios from 'axios';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './usersTypes';

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure };
