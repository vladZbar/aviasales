/* eslint-disable */
const initialState = {
  searchId: '',
  tickets: [],
  stop: false,
  amount: 5,
  loading: true,
}

const GET_SEARCH_ID = 'GET_SEARCH_ID'
const GET_TICKETS = 'GET_TICKETS'
const ADD_FIVE = 'ADD_FIVE'
const DEFAULT_FIVE = 'DEFAULT_FIVE'

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      }
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
        loading: false,
      }
    case ADD_FIVE:
      return {
        ...state,
        amount: state.amount + 5,
      }
    case DEFAULT_FIVE:
      return {
        ...state,
        amount: 5,
      }
    default:
      return state
  }
}

export const getSearchIdAction = (payload) => ({ type: GET_SEARCH_ID, payload })
export const getTicketsAction = (payload) => ({ type: GET_TICKETS, payload })
export const addFiveTicketsAction = () => ({ type: ADD_FIVE })
export const defaultFiveTicketsAction = () => ({ type: DEFAULT_FIVE })
