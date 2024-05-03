import React from "react";
import "./mainStyle.css";
import { useDispatch, useSelector } from "react-redux";

export const MainCard = () => {
  const packall = useSelector((item) => item.pack.pack);
  console.log(packall)
 
  return (
    <div className="main-card  my-4 mb-4 " style={{ borderRadius: "30px" }}>
      {packall ? (
        packall.map((item) => (
          <>
            <div className=" mt-2 bg-light " style={{ borderRadius: "30px" }}>
              <div className="container-fluid position-relative my-2 bg-light  g-0">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3e8b/a3b6/4cefe156a20d5cc7a0c0293e89a1e5df?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEWj7WesZqIPuD3-FifBHR-DxRPSxD6wABZgBmutU1mD6f4To0Q1m~yL1qwSA8Src5lbZMNC-NsfbK5x02HeI4P-G7Uoyj-xZ03hl60xKa9665L4441sd6G19dMkU-w4ZYpDnyWdOH6uGkW8ib0zIr-hD3idGkxYzSrfkAOUfwulPCS82Xp-tXzxk8khoszgwijIuKJplRRe6ucZX4M7vAjS~UoOLe1thu1NOSkX4Zzybzl0nsNIZTi0qi--nkdxOcN2dlX9vgHIHkquH1aa5O3XLOHNpVBdc32mxrLSqZQ89I7ZdlV60W1U~VIJn4OuRu7v3Fs-6BiUGx~5wXocYw__"
                  alt=""
                  className="w-100 "
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                  }}
                />
              </div>
              <div className="container-fluid bg-light d-flex border p-2 justify-content-between">
                <h6>{item.title}</h6>
                <p
                  className="fs-7 px-1 rounded"
                  style={{ border: "1px solid #007AFF" }}
                >
                  {item.Duration}
                </p>
              </div>
              <div className="container-fluid bg-light d-flex justify-content-between">
                
                <div className="col-6">
                  <ul className="custom-list text-start">
                    
                    {item.Things.slice(
                      0,
                      Math.ceil(item.Things.length / 2)
                    ).map((thing, index) => (
                      <li key={index}>{thing}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="custom-list text-start">
                    {item.Things.slice(Math.floor(item.Things.length / 2)).map(
                      (thing, index) => (
                        <li key={index}>{thing}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div
                className="p-1 d-flex bg-light justify-content-between text-center"
                style={{
                  background: "#DADADA",
                  width: "99%",
                  margin: "0 auto",
                  borderRadius: "4px",
                  border: "1px dotted #DADADA ",
                }}
              >
                <p
                  className="my-3 text-start"
                  style={{ marginRight: "10px", fontSize: "14px" }}
                >
                  This price is lower than the average price in April
                </p>
                {/* <button
          style={{
            padding: "5px",
            border: "none",
            borderRadius: "5px",
            color: "black",
          }}
        > */}
                <p className="m-0 p-0" style={{ fontSize: "12px" }}>
                  <span
                    className=" font-weight-bold"
                    style={{ fontWeight: "800" }}
                  >
                    {" "}
                    {item.Price}{" "}
                  </span>
                  /person
                  <span style={{ fontSize: "12px", display: "block" }}>
                    Total price {item.Price * 3}
                  </span>
                </p>
                {/* </button> */}
              </div>
              <div
                className="my-4 mb-5 bg-transparent"
                style={{ borderRadius: "20px" }}
              >
                <h6 className="my-2 py-3 " style={{ borderRadius: "20px" }}>
                  <span>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/4b36/1c22/6cac4bf818aae4a46b9d4c28ad0df6b0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZGb~FzG8ndrt1IVQbhcNPbGzktmJgH0O0-Ih6Niecf5ZouHYyeUCsWO0KdeRWNovcvt1pPFbWK6m3GNEfxxjbHIOCGRXltvB~wFYdiJ64TNiR5EMX9SbqiDOtSyDky0qTGn0IQ~~~Q75dRNVwVIIZ1ZbbMaued9He0O6Y54BrXeDTk~xN80Mh5N8MUbEii0Be5tYjlU0XVBf7agjoeROaEN0RsScKXx7PVC9vaCzdxQRz7Kthd3QrRH4AAGnFgn79kD9WxT8t6gGI7MfA1203Ghs4yEwe5C0qf5dgcZ8gRPuyg3lC120gl~Ql~b5p2Q9uMuxEfumZL08QsSBLKmhw__"
                      className="mx-1 bg-transparent"
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                  Extra Rs 5,898 off,Use Code{" "}
                  <span className="text-bold" style={{ fontWeight: "700" }}>
                    CAPITALHUB
                  </span>
                </h6>
              </div>
            </div>
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
