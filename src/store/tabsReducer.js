/* eslint-disable */
const initialState = {
  sortOption: 'low_price', // Начальное значение
}

const SET_SORT_OPTION = 'SET_SORT_OPTION'

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      }
    default:
      return state
  }
}

export const sortOtionAction = (payload) => ({ type: SET_SORT_OPTION, payload })
