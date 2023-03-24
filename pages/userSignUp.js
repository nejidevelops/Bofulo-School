import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "../components/header/header";
// import Link from "next/link";

function UserSignUp() {
  // Declaring the initials
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // handle user registration
  function handleSubmit(e) {
    e.preventDefault();
    // check matching password
    if (password !== passwordConfirm) {
      // if  sign up failed
      let misMatchAlert = Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Passwords don't match"
      });
      // after alert reload page
      misMatchAlert.then(function () {
        window.location = "/signup";
      });
      return;
    }

    // send data to server
    fetch("https://buildcon.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if account created successfully
        let successAlert = new Swal({
          title: "Success!",
          text: "User saved successfully!",
          type: "success",
        });
        // after successful sign up then login
        successAlert.then(function () {
          // sessionStorage.setItem("user_id", JSON.stringify(user.id))
          window.location = "/userLogin";
        });
      })
      .catch((err) => {
        console.log(err);
        // if  sign up failed
        let failAlert = new Swal({
          title: "Oops!",
          text: "User not saved!",
          type: "error",
        });
        // after alert reload page
        failAlert.then(function () {
          window.location = "/userSignUp";
        });
      });
  }

  return (
    <div>
      <>
        <Header />
        <div className="form-main-container">
          <div className="form-wrapper">
            <div className="form-header">
              <span className="form-title">
                Sign up to <strong>Build Con</strong>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="form-content">
              <div className="form-group"></div>
              <div className="input-wrapper">
                <input
                  className="input-style"
                  type="name"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="input-style-focus"></span>
              </div>
              <div className="input-wrapper">
                <input
                  className="input-style"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-style-focus"></span>
              </div>
              <div className="input-wrapper">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="form-control-focus"></span>
                  <div
                    className="input-group-addon"
                    onClick="passwordVisibility();"
                  >
                    <i className="fa fa-eye" id="showPass"></i>
                    <i className="fa fa-eye-slash d-none" id="hidePass"></i>
                  </div>
                </div>
              </div>

              <div className="input-wrapper">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Repeat Password"
                  id="repeatPassword"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <span className="input-style-focus"></span>
              </div>

              <button className="button-style w-100" type="submit">Sign Up</button>

              <p className="txt-style1 mt-5">
                Already a member?{" "}
                <a className="txt-style2" href="#">
                  <strong>Sign In!</strong>
                </a>
              </p>
            </form>
          </div>
        </div>
      </>

    
    </div>
  );
}

export default UserSignUp;
