import React, { useState, useContext } from "react";
import AppContext from "../components/AppContext";
import Header from "../components/header/header";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import Router from "next/router";
function AdminLogin({ setCurrentUser }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  // const navigate = useNavigate();
  const context = useContext(AppContext);
  // get csrf token
  function getCSRFToken() {
    return decodeURI(document.cookie.split("=")[1]);
  }
  function handleUserSubmit(e) {
    e.preventDefault();
    fetch("https://buildcon.herokuapp.com/admin_login", {
      method: "POST",
      headers: {
        "X-CSRF-Token": getCSRFToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          context.setCurrentUser(user);
          console.log(user);
          Router.push("/admin");
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }
  return (
    <>
      <Header />
      <div className="form-main-container">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-title">
              Welcome Back To <strong>BuildCon</strong>
            </span>
          </div>
          <form onClick={handleUserSubmit} className="form-content">
            <div className="input-wrapper">
              <label htmlFor="username" className="text-l">
                Email:
              </label>
              <input
                required
                className=" mt-2 h-8 rounded-lg"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input-style-focus"></span>
            </div>
            <div className="input-wrapper">
              <div className="input-group">
                <label htmlFor="username" className="text-l">
                  Password:
                </label>
                <input
                  className="mt-2 h-8 rounded-lg"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.map((error) => {
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                  </div>;
                })}
                <span className="form-control-focus"></span>
              </div>
            </div>
            <button className="button-style w-100" type="submit">
              Login
            </button>
            <p className="txt-style1 mt-5">
              Not Admin?{" "}
              <Link className="txt-style2" href="/userSignUp">
                <strong>Create Account</strong>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default AdminLogin;
