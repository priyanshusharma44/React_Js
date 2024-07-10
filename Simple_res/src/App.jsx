import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="app">
        <Signin
          email={formData.email}
          password={formData.password}
          handleChange={handleChange}
        />
        <Signup
          name={formData.name}
          email={formData.email}
          password={formData.password}
          address={formData.address}
          number={formData.number}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
