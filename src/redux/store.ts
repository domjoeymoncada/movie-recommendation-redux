import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./features/movieListSlice";

export const store = configureStore({
  reducer: {
    movieListRecommendations: movieListSlice,
  },
});
