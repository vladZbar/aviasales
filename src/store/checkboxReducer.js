/* eslint-disable */
const initialState = {
  checkboxes: {
    all: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
}

const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'

export const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      const { payload } = action
      const newState = { ...state.checkboxes }

      if (payload === 'all') {
        const newValue = !state.checkboxes.all
        return {
          ...state,
          checkboxes: {
            all: newValue,
            noTransfers: newValue,
            oneTransfer: newValue,
            twoTransfers: newValue,
            threeTransfers: newValue,
          },
        }
      } else {
        newState[payload] = !state.checkboxes[payload]
        newState.all = newState.noTransfers && newState.oneTransfer && newState.twoTransfers && newState.threeTransfers
        // эта хуйня работает так что если все чекбоксы будут приведены к одному значению, то all тоже будет к нему приведен
      }
      return {
        ...state,
        checkboxes: newState,
      }
    default:
      return state
  }
}

export const checkboxAction = (payload) => ({ type: TOGGLE_CHECKBOX, payload })
