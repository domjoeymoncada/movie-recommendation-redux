import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendations: [],
};

export const movieListSlice = createSlice({
  name: "movie-list-recommendations",
  initialState,
  reducers: {
    addMovieRecommendation: (state, action) => {
      state.recommendations.push(action.payload);
    },
  },
});

export const { addMovieRecommendation } = movieListSlice.actions;
export default movieListSlice.reducer;
