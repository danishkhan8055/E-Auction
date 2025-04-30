import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { _apiurluser } from "../apiURLs";

function Register() {
  const [output, setOutput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) formErrors.name = "Name is required.";
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!password.trim()) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }
    if (!mobile.trim()) {
      formErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
      formErrors.mobile = "Invalid mobile number (10 digits required).";
    }
    if (!address.trim()) formErrors.address = "Address is required.";
    if (!city) formErrors.city = "Please select a city.";
    if (!gender) formErrors.gender = "Please select a gender.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return; // Stop if validation fails

    const userDetails = { name, email, password, mobile, address, city, gender };

    axios
      .post(_apiurluser + "save", userDetails)
      .then((response) => {
        setOutput(response.data.result);
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
        setErrors({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-container">
      <h1 className="display-5 text-uppercase mb-4 text-center">
        Register <span className="text-primary">Here!!!</span>
      </h1>
      {output && <p style={{ color: "blue", textAlign: "center" }}>{output}</p>}
      
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email address:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Mobile:</label>
          <input type="text" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea rows="3" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <select className="form-control" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="Indore">Indore</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Bhopal">Bhopal</option>
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input type="radio" value="male" name="gender" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
              Male
            </label>
            <label>
              <input type="radio" value="female" name="gender" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
              Female
            </label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
