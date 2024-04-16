import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import RegImg from "../assets/reg.png";

const Registration = () => {
  let navigate = useNavigate();
  const MyInput = styled(TextField)(({ theme }) => ({
    width: "80%",
    marginBottom: "34px",
  }));

  const MyButton = styled(Button)({
    backgroundColor: "#5F35F5",
    width: "80%",
    borderRadius: "86px",
    padding: "20px 0px",
  });

  const auth = getAuth();
  let [regdata, setRegdata] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  let [loader, setLoader] = useState(false);

  let handleChange = (e) => {
    setRegdata({ ...regdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = () => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, regdata.email, regdata.password)
      .then((userCredential) => {
        console.log(userCredential);
        setRegdata({
          email: "",
          fullname: "",
          password: "",
        });
        navigate("/login")
        setLoader(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode.includes("email")) {
          toast("Email already in use!");
        }

        if (errorCode.includes("weak")) {
          toast("Password must be atleast 6 characters!");
        }
        setLoader(false);
      });

    // if (regdata.email == "") {
    //   toast.error("Please give email!");
    // } else {
    //   var validRegex =
    //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //   if (!validRegex.test(regdata.email)) {
    //     toast.error("Please give valid email!");
    //   }
    // }
    // if (regdata.fullname == "") {
    //   toast.error("Please give fullname!");
    // }
    // if (regdata.password == "") {
    //   toast.error("Please give password!");
    // } else {
    //   var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    //   if (!paswd.test(regdata.password)) {
    //     toast.error("Please give valid password!");
    //   }
    // }
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className="regbox">
            <h2>Get started with easily register</h2>
            <p>Free register and you can enjoy it</p>
            <div>
              <MyInput
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="email"
                type="email"
                onChange={handleChange}
                value={regdata.email}
              />
            </div>
            <div>
              <MyInput
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                name="fullname"
                type="text"
                onChange={handleChange}
                value={regdata.fullname}
              />
            </div>
            <div>
              <MyInput
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                onChange={handleChange}
                value={regdata.password}
              />
            </div>
            {loader ? (
              <Puff
                visible={true}
                height="20"
                width="20"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <MyButton onClick={handleSubmit} variant="contained">
                Sign Up
              </MyButton>
            )}
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className="regimg" src={RegImg} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
