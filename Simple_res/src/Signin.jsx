import React from "react";

function Signin(props) {
  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={props.email}
          onChange={props.handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleChange}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
