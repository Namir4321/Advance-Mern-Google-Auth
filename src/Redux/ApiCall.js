import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainrequest } from "../Request";
import axios from "axios";
export const postpack = createAsyncThunk(
  "pack",
  async ({ title, TripDuration, Things, Price }) => {
    try {
      const PackDetails = { title, TripDuration, Things, Price };
      console.log(PackDetails);
      const res = await mainrequest.post("pack/postpack", PackDetails);
      const pack = res.data;
      return pack;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getpack = createAsyncThunk("getpack", async () => {
  try {
    const res = await mainrequest.get("pack/getpack");
    const pack = res.data.map((item)=>item);
    return pack;
  } catch (err) {
    console.log(err)
  }
});
