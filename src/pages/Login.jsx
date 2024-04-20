import React, { useState } from "react";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/allAPI";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userdata);
    const result = await loginAPI(userdata);
    console.log(result);
    if (result.status === 200) {
      sessionStorage.setItem("existinguser", JSON.stringify(result.data.existinguser));
      sessionStorage.setItem("token", result.data.token);
      navigate('/');
    }
  };

  // Define the demo credentials
  const demoCredentials = {
    email: "demo@example.com",
    password: "password123"
  };

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        {/* Background and layout code here... */}
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Bookmart</a></h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Sign in to your account</span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setUserdata({ ...userdata, email: e.target.value })} />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                      <div className="reset-pass"></div>
                    </div>
                    <input type="password" name="password" onChange={(e) => setUserdata({ ...userdata, password: e.target.value })} />
                  </div>
                  <div className="field padding-bottom--24">
                    <input type="submit" name="submit" onClick={handleLogin} />
                  </div>
                  <div className="field">
                    <Link to="/register" style={{ marginLeft: '90px' }}>Don't have an account?</Link>
                  </div>
                </form>
                
                {/* Add a small box with demo credentials */}
                <div className="demo-credentials-box" style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px', borderRadius: '5px' }}>
                  <h4>Demo Credentials</h4>
                  <p>Email: <strong>abc123@gmail.com</strong></p>
                  <p>Password: <strong>abusidmp</strong></p>
                </div>

              </div>
            </div>
            <div className="footer-link padding-top--24">
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                {/* Footer content here... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
