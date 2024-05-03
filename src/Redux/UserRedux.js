import { createSlice } from "@reduxjs/toolkit";
import { postauthusinggoogle } from "./ApiCall";
const UserSlice = createSlice({
  name: "USer",
  initialState: {
    Name: "",
    Email: "",
    Photo: "",
    isError: false,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postauthusinggoogle.pending, (state) => {
        state.Name = "";
        state.Email = "";
        state.Photo = "";
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(postauthusinggoogle.fulfilled, (state, action) => {
        console.log(action.payload)
        state.Name = action.payload.user.name;
        state.Email = action.payload.user.email;
        state.Photo = action.payload.user.Photo;
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(postauthusinggoogle.rejected, (state, action) => {
        state.Name = "";
        state.Email = "";
        state.Photo = "";
        state.isFetching = true;
        state.isError = false;
      });
  },
});
export default UserSlice.reducer;
