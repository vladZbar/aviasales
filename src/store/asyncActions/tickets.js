import axios from 'axios'

import { getSearchIdAction, getTicketsAction } from '../ticketReducer'

export const fetchSearchId = () => {
  return (dispatch) => {
    axios
      .get('https://aviasales-test-api.kata.academy/search')
      .then((response) => dispatch(getSearchIdAction(response.data.searchId)))
      .catch((err) => console.log(err.name, ' ошибка при получении searchId'))
  }
}

export const fetchGetTickets = () => {
  return (dispatch, getState) => {
    const state = getState()
    let searchId = state.ticket.searchId
    if (searchId) {
      axios
        .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        .then((response) => dispatch(getTicketsAction(response.data)))
        .catch((err) => console.log(err.name, ' ошибка при получении порции билетов'))
    }
  }
}
