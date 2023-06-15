import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const history = useNavigate();

  const [username, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        dob,
        email,
        password,
      });
      const { token, user } = response.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        history("/home", { state: { id: user.email } });
      } else if (response.data === "exist") {
        alert("User already exist");
      }
    } catch (e) {
      console.log(e);
      alert("An error occured");
    }
  }

  return (
    <div className="login">
      <h1>Signup</h1>

      <form action="POST">
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="username"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Full Name"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          <input
            type="date"
            onChange={(e) => {
              setDob(e.target.value);
            }}
            placeholder="Date Of Birth"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Create Password"
          />
        </div>
        <input type="submit" onClick={submit} />
      </form>
      <div className="link">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
