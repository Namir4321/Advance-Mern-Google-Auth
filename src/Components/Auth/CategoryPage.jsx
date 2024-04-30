import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiPalmTree } from "react-icons/gi";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { ImageCard } from "./ImageCard";

export const CategoryPage = () => {
  return (
    <div>
      <div className="container-fluid text-start mt-3">
        <h6>Hi Kartik</h6>
      </div>
      <div className="container-fluid d-flex justify-content-between">
        <h4>Where do you wanna Go?</h4>
        <h5 className="bg-light rounded-pill">
          <CiBellOn className="fs-1 " />
        </h5>
      </div>
      <div className="container-fluid d-flex  position-relative">
        <input
          className="w-100 rounded p-2 border bg-light"
          placeholder="Search"
        />

        <CiSearch
          className="position-absolute my-2  rounded p-1 fs-1"
          style={{ right: "20", background: "#007AFF" }}
        />
      </div>
      <div className="container-fluid my-3 d-flex justify-content-between">
        <div className="container mx-1 bg-light rounded">
          <GiPalmTree
            className="fs-1 "
            style={{ height: "45px", width: "65px" }}
          />
        </div>
        <div className="container mx-1 bg-light rounded">
          <MdOutlineDirectionsBus
            className="fs-1 "
            style={{ height: "45px", width: "65px" }}
          />
        </div>
        <div className="container mx-1 bg-light rounded">
          <FaCar className="fs-1 " style={{ height: "45px", width: "65px" }} />
        </div>
        <div className="container mx-1 bg-light rounded">
          <FaBuilding
            className="fs-1 p-2"
            style={{ height: "45px", width: "65px" }}
          />
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-between rounded bg-dark"
        style={{ width: "95%" }}
      >
        <div className="d-flex ">
          {" "}
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span style={{ color: "white" }}> School Students </span>
            </label>
          </div>{" "}
        </div>
        <div className="d-flex ">
          {" "}
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span style={{ color: "white" }}> Collage Student </span>
            </label>
          </div>{" "}
        </div>
        <div className="">
          {" "}
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span style={{ color: "white" }}> Corprate </span>
            </label>
          </div>{" "}
        </div>
      </div>
      <div
        className="container-fluid my-2 border rounded-pill"
        style={{ width: "95%" }}
      >
        <input
          src=""
          alt=""
          placeholder="From"
          className="p-2 border-none shadow-none w-100"
          style={{ border: "none" }}
        />
      </div>
      <div
        className="container-fluid my-2 border rounded-pill"
        style={{ width: "95%" }}
      >
        <input
          src=""
          alt=""
          placeholder="To"
          className="p-2 border-none shadow-none w-100"
          style={{ border: "none" }}
        />
      </div>
      <div
        className="container-fluid my-2 border rounded-pill"
        style={{ width: "95%" }}
      >
        <input
          src=""
          alt=""
          placeholder="Date"
          className="p-2 border-none shadow-none w-100"
          style={{ border: "none" }}
        />
      </div>
      <div
        className="container-fluid my-2 border rounded-pill"
        style={{ width: "95%" }}
      >
        <input
          src=""
          type="date"
          alt=""
          placeholder="Travel Type"
          className="p-2 border-none shadow-none w-100"
          style={{ border: "none" }}
        />
      </div>
      <div
        className="container-fluid my-2 border rounded-pill"
        style={{ width: "95%" }}
      >
        <input
          src=""
          alt=""
          placeholder="Rooms and Guests"
          className="p-2 border-none shadow-none w-100"
          style={{ border: "none" }}
        />
      </div>
      <div className="container-fluid ">
        <button className="btn btn-primary my-2 rounded-pill w-100">
          Search
        </button>
      </div>
      <div className="container-fluid d-flex justify-content-between">
        <div className="container-fluid g-0   rounded "style={{height:"252px"}}>
          <ImageCard />
        </div>
        <div className="container bg-light  ">
          <div
            className="container-fluid g-0 mb-1  rounded "
            style={{ height: "119px" }}
          >
            <ImageCard />
          </div>
          <div
            className="container-fluid g-0  rounded "
            style={{ height: "129px" }}
          >
            <ImageCard />
          </div>
        </div>
      </div>
    </div>
  );
};
