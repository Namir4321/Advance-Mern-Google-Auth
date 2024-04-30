import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { postpack } from "../../../Redux/ApiCall";
export const AddHotel = () => {
const[title,setTitle]=useState("")
const [TripDuration, setTripDuration] = useState(""); 
const [Things, setThings] = useState([]); 
const [Price, setPrice] = useState(""); 
const [thingInput, setThingInput] = useState("");
const dispatch=useDispatch();
const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(postpack({ title, TripDuration, Things, Price }));
    // console.log({title,TripDuration,Things,Price})
}
 const addThing = () => {
   if (thingInput) {
     setThings((prevThings) => [...prevThings, thingInput]);
     setThingInput("");
   }
 };


    return (
      <div>
        <div className="container-fluid justify-content-center text-center">
          <div className="container bg-light" style={{ height: "85px" }}>
            <p className="text-center ">ADD Package</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Title
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Trip Duration
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="write in format 3D/4N"
                  onChange={(e) => setTripDuration(e.target.value)}
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Things Include
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  value={thingInput}
                  onChange={(e) => setThingInput(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-primary ml-2"
                  onClick={addThing}
                >
                  Add
                </button>
              </div>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Price
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <p>Things Include:</p>
              <ul>
                {Things.map((thing, index) => (
                  <li key={index}>{thing}</li>
                ))}
              </ul>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {/* <button className="" type="submit" onClick={handleSubmit}>
            Submit
          </button> */}
        </div>
      </div>
    );
};
