import React, { useState, ChangeEvent, FormEvent } from "react";
import "../style/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  // A useState hook is used to define state variable in a functional component, and state variable will / can change over time and trigger re-renders.
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  // this is the event handler
  // CRUD -> C -> Create ( POST method)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      const userData = { fullName, email, password };
      console.log("User Data:", userData);
      try {
        const response = await axios.post(
          "http://localhost:5000/users",
          userData
        );
        if (response.status === 201) {
          // assuming 201 created status code
          console.log("user saved successfully");
          alert("user registered")
          setError("");
        } else {
          console.log("error saving userdata", response.data);
          setError("Failed to signup, please try again.");
        }
      } catch (error) {
        console.error("error sending user data,", error);
      }
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  return (
    <div className="signup-container">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={handleInputChange(setFullName)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="signup-button">
          Create Account
        </button>
        <br/>
      

      </form>
      
        <button onClick={()=>{navigate("/userlist")}        } style={{marginTop:"10px"}}  className="signup-button">
          Registered Users
        </button>
        
      <p className="terms">
        By creating an account, you agree to our <a href="/">Terms</a> and{" "}
        <a href="/">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Signup;
