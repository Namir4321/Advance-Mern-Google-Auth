import React, { useEffect, useRef, useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

export const OTP = () => {
  const [otpverify, setVerify] = useState("");
  const navigate=useNavigate()
  console.log(location.state)
  // const {confirmationResult}=location.state; 
  const emptyArray = ["", "", "", "", "", ""];
  const [inputs, setInputs] = useState(emptyArray);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const confirmationResult = JSON.parse(
    sessionStorage.getItem("confirmationResult")
  );
    
  const handleInput = (e, index) => {
    const val = e.target.value;
    if (!Number(val)) return;

    if (index < inputs.length-1 ) {
      refs[index + 1].current.focus();
    }

    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const confirmOtp=()=>{
    const userInput=inputs.join("")
    console.log(userInput)
    window.confirmationResult.confirm(userInput).then(res=>{
      console.log(res)
      navigate("/cat")
      
    }).catch(err=>{console.log(err)})
  }
const handleKeyDown=(e,index)=>{
  if(e.keyCode===8){
    const copyInputs=[...inputs]
    copyInputs[index]="";
    setInputs(copyInputs)
   if (index > 0 && inputs[index] === "") {
     // Move focus to the previous input
     refs[index - 1].current.focus();
   }
  }
}
const handlePaste = (e,index) =>{
const data=e.clipboardData.getData("text");
if(!Number(data)||data.length!==inputs.length)
return;
const pastCode=data.split("");
setInputs(pastCode);
refs[inputs.length-1].current.focus();

}
  return (
    <div className="container-fluid ">
      <div className="container mt-5">
        <img
          src="https://s3-alpha-sig.figma.com/img/0c62/a75e/482768c5fe484a70f254be682002a994?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTahX5luh6eMvOwhgv2jbDBe~IeqQU8nn95byDZSytCC0t8CZOQBIEAEZ9aBfPKl8lKEezsgaNETLY7HAcFsvRbYidi-ztmUYPU0knTFGvTqZNyx1mTkM-~pYL92LcawqsxxZFQl9Ms0Aj3lQWbMyxNI6Tpj7g5jNvJ-HAx9EXvhzb41jn1Ok03nwxLfYD9M2JjbzhvSuAhHH0mpjvZNDJIaxyaI364Uh2Lequamkc~EW1cm-dQGAtUIbGDhJksjl2t~W-mkIk36Rwpa96TEz3yMTQZEs3bGz65Rtto3eaep9lsuc4hLYjUgcUzWjwoPAE6tpoP5Ka5B9FfgmPBilw__"
          alt=""
          height="205"
          width=""
          className="mt-5"
        />
      </div>
      <div className="container">
        <h3>Enter Verification Code</h3>
        <p className="fs-7">
          We have just sent a verification code to your mobile number
        </p>
      </div>
      <div className="container justify-content-center d-flex ">
        <div className="mx-3 d-flex">
          {emptyArray.map((item, i) => {
            return (
              <input
                className="input-group mx-2 text-center"
                style={{ height: "50px", width: "50px" }}
                maxLength={1}
                value={inputs[i]}
                type="text"
                onPaste={(e)=>handlePaste(e,i)}
                key={i}
                ref={refs[i]}
                onChange={(e) => {
                  handleInput(e, i);
                }}
                onKeyDown={(e)=>{handleKeyDown(e,i)}}
              />
            );
          })}
        </div>
      </div>
      <div className=" my-2">
        <h6 style={{ color: "#007AFF" }}>Send Code Again</h6>
      </div>
      <div className="position-fixed fixed-bottom ">
        <button className="btn btn-primary w-75 my-5 rounded-pill" onClick={confirmOtp}>
          Verify
        </button>
      </div>
    </div>
  );
};
