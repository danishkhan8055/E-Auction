import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLs';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ email , setEmail ] = useState(null);
  const [ password , setPassword ] = useState(null);  

  const handleSubmit=()=>{

    var userDetails={"email":email,"password":password}
       
    axios.post(_apiurluser+"login",userDetails).then((response)=>{
      if(response.data.token!="error")
      {
        let user=response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",user._id);
        localStorage.setItem("name",user.name);
        localStorage.setItem("email",user.email);
        localStorage.setItem("mobile",user.mobile);
        localStorage.setItem("address",user.address);
        localStorage.setItem("city",user.city);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("role",user.role);
        localStorage.setItem("info",user.info);    

        user.role=="admin"?navigate("/admin"):navigate("/user");
      } 
      else
      {     
       setOutput("Invalid user or verify your account....");
       setEmail("");
       setPassword("");
      }
    })
  }

  return (
    <div className="login-container">
  <h1 className="display-5 text-uppercase mb-4">
    Login <span className="text-primary">Here!!!</span>
  </h1>

  {output && <p style={{ color: "blue", textAlign: "center" }}>{output}</p>}

  <form>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <br />
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <br />
    <button type="button" onClick={handleSubmit} className="btn btn-success">
      Login
    </button>
  </form>
</div>

  );
}

export default Login;
