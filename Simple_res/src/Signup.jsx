import React from "react";

function Signup(props) {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br />
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
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={props.address}
          onChange={props.handleChange}
        />
        <br />
        <label>Number:</label>
        <input
          type="text"
          name="number"
          value={props.number}
          onChange={props.handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
