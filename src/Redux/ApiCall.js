import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainrequest } from "../Request";
import axios from "axios";
export const postpack = createAsyncThunk(
  "pack",
  async ({ title, TripDuration, Things, Price }) => {
    try {
      
       const authToken = localStorage.getItem("authToken");
 const headers = {
   Authorization: `Bearer ${authToken}`,
 };
      const PackDetails = { title, TripDuration, Things, Price };
      console.log(PackDetails);
      const res = await mainrequest.post(
        "pack/postpack",
        PackDetails,{headers}
      );
      const pack = res.data;
      return pack;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getpack = createAsyncThunk("getpack", async () => {
  try {
   
    const res = await mainrequest.get(`pack/getpack/`);
    const pack = res.data.map((item) => item);
    return pack;
  } catch (err) {
    console.log(err);
  }
});
export const postauthusinggoogle = createAsyncThunk(
  "user",
  async ({ name, email, photo }) => {
    try {
      const AuthDetails = { name, email, photo };
      const res = await mainrequest.post("auth/google", AuthDetails);
      const result = res.data;
      console.log(result);
      if (result && result.token) {
        // Store the token in localStorage
        localStorage.setItem("authToken", result.token);
      }
      return result;
    } catch (err) {
      console.log(err);
    }
  }
);
