import { useState } from "react";
import "./Register.css";
import axios from "axios";
export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function addUser(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users",
        data
      );
      const userInfo = await user.data;
      console.log(userInfo);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    addUser({
      name,
      email,
      password,
    });
  }
  return (
    <div className="rCointener">
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="First Name"
          name="firstname"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <input
          type="text"
          className="rInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Username"
          name="username"
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password "
          name="password "
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={handleClick} className="button1">
          Register
        </button>
      </form>
    </div>
  );
}
