import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

const initialState = {
  user: {}
}

const actionTypes = {
  'LOGIN': 'LOGIN',
  'LOGOUT': 'LOGOUT'
}

export const actions = {
  login: ({ username }) => ({
    type: actionTypes.LOGIN,
    payload: { username }
  }),
  logout: () => ({
    type: actionTypes.LOGOUT
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}

const makeStore = () => createStore(reducer)

export const wrapper = createWrapper(makeStore)