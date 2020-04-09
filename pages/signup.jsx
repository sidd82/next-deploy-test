import React, { useState } from "react";
import Axios from "axios";
import apiUrl from "../config/apiUrl";

const Signup = () => {
  const [data, setData] = useState({
    name: "Ramkrishna",
    email: "psiddhesh14@gmail.com",
    hashedPassword: "Si78757875",
    confirmedPassword: "Si78757875",
  });

  const handleSignUpSubmit = async (e) => {
    try {
      e.preventDefault();
      const signUpRes = await Axios.post(
        `${apiUrl}/api/auth/user/sign-up`,
        data,
        {
          withCredentials: true,
          headers: {
            "x-api-key": process.env.X_API_KEY,
          },
        }
      );
      console.log(signUpRes.data);
    } catch (e) {
      console.log(e.response.data);
    }
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
            value={data.hashedPassword}
            onChange={(e) =>
              setData({ ...data, hashedPassword: e.target.value })
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
