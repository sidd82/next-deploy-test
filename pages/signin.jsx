import React, { useState } from "react";
import Axios from "axios";
import apiUrl from "../config/apiUrl";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";

const Signin = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "psiddhesh14@gmail.com",
    password: "Si78757875",
    fingureId: "123",
  });

  const handleSignUpSubmit = async (e) => {
    try {
      e.preventDefault();
      const signUpRes = await Axios.post(
        `${apiUrl}/api/auth/user/sign-in`,
        data,
        {
          withCredentials: true,
          headers: {
            "x-api-key": process.env.X_API_KEY,
          },
        }
      );
      router.push("/");
      console.log(signUpRes);
    } catch (e) {
      console.log(e);
    }
  };

  const responseGoogleSuccess = async (res) => {
    try {
      const data = {
        tokenId: res.tokenId,
        platform: "web",
        fingureId: "999",
      };
      const signUpRes = await Axios.post(
        `${apiUrl}/api/auth/user/google-sign-in`,
        data,
        {
          withCredentials: true,
          headers: {
            "x-api-key": process.env.X_API_KEY,
          },
        }
      );
      router.push("/");
      console.log(signUpRes);
    } catch (e) {
      console.log(e);
    }
  };

  const responseGoogleError = (err) => {
    console.log(err);
  };
  return (
    <div>
      <form onSubmit={handleSignUpSubmit}>
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
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID_WEB}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Continue with Google
          </button>
        )}
        uxMode="popup"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleError}
      />
    </div>
  );
};

export default Signin;
