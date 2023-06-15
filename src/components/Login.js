import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
      const { token, user } = response.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        history("/home", { state: { id: user.email } });
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <FontAwesomeIcon icon={faUserCircle} className="faUserCircle" />
      <form action="POST">
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="icon" />

          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className="input-with-icon"
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="input-with-icon"
          />
        </div>
        <input type="submit" onClick={submit} value="Login" />
      </form>
      <div className="link">
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
