import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  likes: number[];
}

const initialState: State = {
  likes: JSON.parse(localStorage.getItem("likes") || '""') || [],
};

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const findItem = state.likes.find((item) => item === action.payload);

      if (findItem) {
        state.likes = state.likes.filter((item) => item != action.payload);
        localStorage.setItem("likes", JSON.stringify(state.likes));
      } else {
        state.likes.push(action.payload);
        localStorage.setItem("likes", JSON.stringify(state.likes));
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;

export default likesSlice.reducer;
