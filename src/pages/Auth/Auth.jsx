import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="auth_left">
        <img src={Logo} alt="" />
        <div className="web_name">
          <h1>FUD Media </h1>
          <h6>explore the ideas throughout the world</h6>
        </div>
      </div>
      <SingUp />
      {/* <Login/> */}
    </div>
  );
};

function Login(){
  return(
    <div className="auth_right">
      <form action="" className="infoForm authForm">
        <h3>Login</h3>
        {/* <div>
          <input
            type="text"
            placeholder="First Name"
            className="info_input"
            name="firstname"
          />
          <input
            type="text"
            placeholder="last Name"
            className="info_input"
            name="lastname"
          />
        </div> */}
        <div>
         
          <input
            type="text"
            placeholder="user Name"
            className="info_input"
            name="username"
          />
        </div>
        <div>
          <input
            type="Password"
            placeholder="password"
            className="info_input"
            name="password"
          />
          {/* <input
            type="password"
            placeholder="conform password"
            className="info_input"
            name="conformPassword"
          /> */}
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Create an account. Signup!</span>
        </div>
       <button className="button info_Button" type="submit">Login</button>
      </form>
    </div>
  )
}


function SingUp() {
  return (
    <div className="auth_right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="info_input"
            name="firstname"
          />
          <input
            type="text"
            placeholder="last Name"
            className="info_input"
            name="lastname"
          />
        </div>
        <div>
         
          <input
            type="text"
            placeholder="user Name"
            className="info_input"
            name="username"
          />
        </div>
        <div>
          <input
            type="Password"
            placeholder="password"
            className="info_input"
            name="password"
          />
          <input
            type="password"
            placeholder="conform password"
            className="info_input"
            name="conformPassword"
          />
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Already have an account. Login!</span>
        </div>
       <button className="button info_Button" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
