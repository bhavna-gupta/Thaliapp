import { configureStore } from '@reduxjs/toolkit'

import ItemSlice from "./reducers/ItemSlice";

export const store = configureStore({
  reducer: {

    counter: ItemSlice,
  },
})