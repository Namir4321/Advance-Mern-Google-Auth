import React, { useState } from "react";
import logo from "../../images/log.svg";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { GrApple } from "react-icons/gr";
// import firebase from "../../firebase.js";
import { Link,useNavigate } from "react-router-dom";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase";
import { OTP } from "./OTP";
import { OAuthProvider } from "firebase/auth/cordova";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

// import { getRecaptchaVerifier } from "@firebase/auth/react";

export const Login = () => {
  const navigate=useNavigate();
  const auth = getAuth();
  const [phone, setPhone] = useState();
  // Adjusted code snippet for Login component
 const onSignInSubmit=(e)=>{
   e.preventDefault()
   const auth=getAuth();
  const appVerifier=new RecaptchaVerifier(auth,"recaptcha-container",{size:"invisible"})
  signInWithPhoneNumber(auth,phone,appVerifier)
  .then(res=>{
    // console.log(res)
    console.log("otp send")
    window.confirmationResult=res;
    // console.log(res.confirm)
   sessionStorage.setItem(
     "confirmationResult",
     JSON.stringify(confirmationResult)
   );
   navigate("/verify");

  }).catch((err)=>{
    console.log(err)
  })
 }
 const signinwithgoogle=()=>{
  const auth = getAuth();
  const provider=new GoogleAuthProvider()
  signInWithPopup(auth,provider)
  .then((result)=>{
    console.log(result)
    navigate("/main")
  }).catch(err=>{
console.log(err)
  })
 }
  const signinwithApple = () => {
    const auth = getAuth();
    const provider = new OAuthProvider("apple.com");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid  " style={{ borderRadius: "30px" }}>
      {/* {<OTP className="d-none"/>} */}
      <form onSubmit={onSignInSubmit}>
        <div className="mt-1 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/4c9c/2945/17a4ebd6d800171a529a0469c77eb15f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKsbbeoLyeYBlkvgDmG-V188uH~aubludAxsZQMMHWe~MfC8h0uEvRgdIfaUOsN7fcFPNdq4ArELM-bPvEw~1cC4vzt~Qm9Uxb~CsIDjqdr2S7AtKprBwCcCOKT1~2QP2LO1d9afB4BsIpoNovK64AKVThrOUfYWQstONT1s1am76XsUJ8-cIAJV3tY3TpmDuKsiRYjdaXNFhgRWsmgfKMhLHE2~jUzYYcd~mx1hWCjPNZCnKAeHI3we2VMyRlYfKkdn5Z2SpgNMVt9tqwsoz96ZLCDA-rYWChW1UbV9h522-2V42WQz5GDOLFhEbYCqqB2HGyI-th6hvocVTt10OA__"
            alt=""
            height="165px"
            style={{ background: "cover", borderRadius: "30px" }}
          />
        </div>
        <h1 className="" style={{ color: "#007AFF" }}>
          Welcome <span style={{ color: "black" }}>YesGoBus</span>
        </h1>
        <h5>Sign in with your mobile number</h5>

        <div className="container-fluid  my-4">
          <div className="input-container border rounded-pill">
            <input
              className="container border-0 p-3"
              style={{ paddingLeft: "40px", borderLeft: "3px solid black" }}
              placeholder="+91| Mobile number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div id="recaptcha-container" />

        <div
          style={{
            textAlign: "center",
            margin: "20px 0",
            position: "relative",
            //   width: "20%",
          }}
        >
          <div style={{ borderTop: "1px solid black", width: "100%" }}></div>
          <span
            style={{
              position: "absolute",
              top: "-10px",
              background: "#fff",
              padding: "0 10px",
            }}
          >
            or
          </span>
        </div>
        <div className="container-fluid my-2 ">
          <button
            className="btn btn-secoundry w-100"
            type="button"
            onClick={signinwithgoogle}
          >
            <div
              className="input-container border rounded-pill d-flex "
              type="btn"
            >
              <FcGoogle className="icon mx-4 mt-2 fs-1 my-2" />
              <span className="my-2">Continue with Google</span>
            </div>
          </button>
        </div>

        <div className="container-fluid my-2 ">
          <btn className="btn btn-secoundry  w-100">
            <div
              className="input-container border rounded-pill d-flex "
              type="btn"
            >
              <ImFacebook2 className="icon mx-4 mt-2 fs-1 my-2" />
              <span className="my-2">Continue with Facebook</span>
            </div>
          </btn>
        </div>
        <div className="container-fluid my-2 ">
          <button className="btn btn-secoundry w-100" type="button" onClick={signinwithApple}>
            <div
              className="input-container border rounded-pill d-flex "
              type="btn"
            >
              <GrApple className="icon mx-4 mt-2 fs-1 my-2" />
              <span className="my-2">Continue with Apple</span>
            </div>
          </button>
        </div>
        <h6 className="">
          I dont have an account{" "}
          <span style={{ color: "#007AFF" }}> Sign Up</span>
        </h6>
        <div
          className="container text-center position-fixed fixed-bottom "
          style={{ marginBottom: "90px" }}
        >
          <img src={logo} alt="" height="20px" />
        </div>

        <div className="position-fixed fixed-bottom ">
          <button
            className="btn btn-primary w-75 my-4 rounded-pill"
            // onClick={handleSend}
            type="submit"
            // id="sign-in-button"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};
