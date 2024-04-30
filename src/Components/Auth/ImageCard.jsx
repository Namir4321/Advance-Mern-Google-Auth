import React from "react";
import { FaStar } from "react-icons/fa";

export const ImageCard = () => {
  return (
    <div className="image-container position-relative w-100 h-100">
      <img
        src="https://s3-alpha-sig.figma.com/img/3e8b/a3b6/4cefe156a20d5cc7a0c0293e89a1e5df?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEWj7WesZqIPuD3-FifBHR-DxRPSxD6wABZgBmutU1mD6f4To0Q1m~yL1qwSA8Src5lbZMNC-NsfbK5x02HeI4P-G7Uoyj-xZ03hl60xKa9665L4441sd6G19dMkU-w4ZYpDnyWdOH6uGkW8ib0zIr-hD3idGkxYzSrfkAOUfwulPCS82Xp-tXzxk8khoszgwijIuKJplRRe6ucZX4M7vAjS~UoOLe1thu1NOSkX4Zzybzl0nsNIZTi0qi--nkdxOcN2dlX9vgHIHkquH1aa5O3XLOHNpVBdc32mxrLSqZQ89I7ZdlV60W1U~VIJn4OuRu7v3Fs-6BiUGx~5wXocYw__"
        alt="Goa, India"
        className=" w-100 h-100 rounded"
        style={{ objectFit: "cover",position: "absolute", top: 0, left: 0}}
      />
      <h4
        className="position-absolute start-0 text-light m-2"
        style={{ bottom: "18%" }}
      >
        Goa, India
      </h4>
      <p className="position-absolute text-start bottom-0 start-0 text-light m-2">
        <span className="mx-1" style={{ color: "#007AFF",fontStyle:"bold" }}>
          Rs
        </span>
        30,000 start
        <span className="mx-1">
          <FaStar className="fs-7" style={{ color: "yellow" }} />
        </span>
        <span>4.8</span>
      </p>
    </div>
  );
};
