import axios from 'axios';

const GET_SET = 'GET_SET'
const ADD_SET = 'ADD_SET'
const DELETE_SET = 'DELETE_SET'

const BASE_URL = 'http://localhost:8000'

export const addSet = (title, cards) => {
  const data = { title, cards }
  return (dispatch) => {
    axios.post(`${BASE_URL}/create_set`, data).then( res => {
      dispatch({ type: ADD_SET, set: res.data})
    })
  }
}

export const getSet = (id) => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/set/${id}`).then( res => {
      dispatch({ type: GET_SET, set: res.data})
    })
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_SET:
      return action.set
    case GET_SET:
      return action.set
    default:
      return state
  }
}
