import { configureStore } from '@reduxjs/toolkit'
import RoomReducer from './Reducer/RoomSlice'

export const store = configureStore({
    reducer: {
      room: RoomReducer,
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;