import { configureStore } from '@reduxjs/toolkit'

import { tabsReducer } from './tabsReducer'
import { checkboxReducer } from './checkboxReducer'
import { ticketsReducer } from './ticketReducer'

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    filt: checkboxReducer,
    ticket: ticketsReducer,
  },
  devTools: false,
})
