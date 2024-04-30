import { createSlice } from "@reduxjs/toolkit";
import { getpack } from "./ApiCall";
const PackSlice = createSlice({
  name: "Pack",
  initialState: {
    pack: [],
    isError: false,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getpack.pending, (state) => {
        state.pack = [];
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(getpack.fulfilled, (state, action) => {
        const packs = action.payload;
        state.pack = packs;
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(getpack.rejected, (state, action) => {
        state.pack = [];
        state.isFetching = true;
        state.isError = false;
      });
  },
});
export default PackSlice.reducer;
