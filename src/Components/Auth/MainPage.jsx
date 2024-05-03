import React, { useEffect } from 'react'
import { FaSortAmountDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MainCard } from './MainCard';
import { mainrequest } from '../../Request';
import {useDispatch, useSelector} from "react-redux"
import { getpack } from '../../Redux/ApiCall';
export const MainPage = () => {
  
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(getpack());
  },[])
  return (
    <div className="" style={{ background: "#DADADA" }}>
      <div className="container-fluid  position-relative g-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/3e8b/a3b6/4cefe156a20d5cc7a0c0293e89a1e5df?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEWj7WesZqIPuD3-FifBHR-DxRPSxD6wABZgBmutU1mD6f4To0Q1m~yL1qwSA8Src5lbZMNC-NsfbK5x02HeI4P-G7Uoyj-xZ03hl60xKa9665L4441sd6G19dMkU-w4ZYpDnyWdOH6uGkW8ib0zIr-hD3idGkxYzSrfkAOUfwulPCS82Xp-tXzxk8khoszgwijIuKJplRRe6ucZX4M7vAjS~UoOLe1thu1NOSkX4Zzybzl0nsNIZTi0qi--nkdxOcN2dlX9vgHIHkquH1aa5O3XLOHNpVBdc32mxrLSqZQ89I7ZdlV60W1U~VIJn4OuRu7v3Fs-6BiUGx~5wXocYw__"
          alt=""
          className=" w-100  rounded"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <h1
          className="position-absolute  text-center  text-light my-2"
          style={{
            top: "28%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Goa Package
        </h1>
        <h6
          className="position-absolute w-100 text-center  text-light my-2"
          style={{
            top: "42%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Experience beaches and sunset
        </h6>
        <p
          className="position-absolute w-100 text-center  text-light my-2"
          style={{
            top: "52%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Add Travel Date, 2 Adults, 1 Room
        </p>
      </div>
      <div
        className="position-absolute w-100 text-center  text-light my-2"
        style={{
          top: "26%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "80%",
        }}
      >
        <div
          className="container-fluid d-flex  position-absolute rounded bg-dark"
          style={{
            width: "90%",
            top: "70%",
            left: "5%",
            padding: "10px",
          }}
        >
          <div className="form-check container">
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label  text-light d-flex flex-wrap"
              htmlFor="flexRadioDefault1"
            >
              School
            </label>
          </div>
          <div className="form-check container">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label text-light fs-7 flex-wrap"
              htmlFor="flexRadioDefault2"
            >
              College
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label
              className="form-check-label text-light"
              htmlFor="flexRadioDefault3"
            >
              Corporate
            </label>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-between p-2 "
        style={{ background: "#EAEAEA" }}
      >
        <button
          className="btn border btn-secoundry"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <span>Sort</span>
          <FaSortAmountDown />
        </button>
        <button
          className="btn border btn-secoundry"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <span>Filter</span>
          <FaSortAmountDown />
        </button>
        <button
          className="btn border btn-secoundry"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <span>Duration</span>
        </button>
        <button
          className="btn border btn-secoundry"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <span>Flight</span>
        </button>{" "}
        <button
          className="btn border btn-secoundry"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <span>Sort</span>
        </button>
      </div>
      <div className="conainer-fluid my-1 p-3 bg-dark d-flex  justify-content-between">
        <span className="text-light mx-1">ALL Packages</span>
        <span className="text-light mx-1">ALL Inclusive</span>
        <span className="text-light mx-1">Honeymoon</span>
        <span className="text-light mx-1">Villas</span>
      </div>
      <div className=''style={{background:"#DADADA"}}>
      <MainCard className="" style={{ borderRadius:"30px",marginTop:"10px"}}/>
      </div>
    </div>
  );
}
