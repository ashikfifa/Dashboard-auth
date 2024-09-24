import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarToggle/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});