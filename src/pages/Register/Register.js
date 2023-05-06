import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { BASE_URL } from "../../config/api";
export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [incorrectStyles, setIncorrectStyles] = useState(false);
  const colorMessage = incorrectStyles ? "#f00" : "#000";
  async function addUser(data) {
    try {
      const user = await axios.post(`${BASE_URL}/users`, data);
      const userInfo = await user.data;
      console.log(userInfo);
      setIncorrectStyles(false);
      setMessage("Uspesno ste registrovani na nasem sajtu!");
    } catch (err) {
      setIncorrectStyles(true);
      console.log(err.response.data.err);
      setMessage(err.response.data.err);
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
      {
        isSuccess ? <p style={{ textAlign: "center", color: colorMessage}}>{message && message}</p> :

      }
      <form>
        <h1>Register</h1>
        <p style={{ textAlign: "center", color: colorMessage}}>{message && message}</p>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          placeholder="Name"
          name="Name"
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
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          className="rInput"
          type="password"
          name="password"
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
