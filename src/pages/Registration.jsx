import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { toast } from "react-toastify";

import RegImg from "../assets/reg.png";

const Registration = () => {
  // const notify = () => toast("Wow so easy!");

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

  let [regdata, setRegdata] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  let handleChange = (e) => {
    setRegdata({ ...regdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = () => {
    if (regdata.email == "") {
      toast.error("Please give email!");
    } else {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!validRegex.test(regdata.email)) {
        toast.error("Please give valid email!");
      }
    }
    if (regdata.fullname == "") {
      toast.error("Please give fullname!");
    }
    if (regdata.password == "") {
      toast.error("Please give password!");
    } else {
      var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      if (!paswd.test(regdata.password)) {
        toast.error("Please give valid password!");
      }
    }
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
              />
            </div>
            <MyButton onClick={handleSubmit} variant="contained">
              Sign Up
            </MyButton>
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
