import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    item: itemsSlice.reducer,
  },
});

export default myntraStore;
