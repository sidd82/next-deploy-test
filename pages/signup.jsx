import React, { useState } from "react";
import Axios from "axios";
import Url from "../config/apiUrl";

const Signup = () => {
  const [data, setData] = useState({
    name: "Ramkrishna",
    email: "psiddhesh14@gmail.com",
    hashedpassword: "Si78757875",
    confirmedPassword: "Si78757875",
  });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(Url);
    // const signUpRes = Axios.post("");
  };

  return (
    <div>
      <form onSubmit={handleSignUpSubmit}>
        {/* Input For Name */}
        <div>
          <label htmlFor="name" style={{ display: "block" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        {/* Input For Email */}
        <div>
          <label htmlFor="email" style={{ display: "block" }}>
            Email
          </label>
          <input
            type="email"
            name="name"
            placeholder="Enter Email Id"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* Input For Password */}
        <div>
          <label htmlFor="password" style={{ display: "block" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter pasword"
            value={data.hashedpassword}
            onChange={(e) =>
              setData({ ...data, hashedpassword: e.target.value })
            }
          />
        </div>

        {/* Input For Confirm Password */}
        <div>
          <label htmlFor="confirmedPassword" style={{ display: "block" }}>
            Name
          </label>
          <input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm password"
            value={data.confirmedPassword}
            onChange={(e) =>
              setData({ ...data, confirmedPassword: e.target.value })
            }
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
