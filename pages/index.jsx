import React, { useEffect } from "react";
import Link from "next/link";
import Axios from "axios";

import apiUrl from "../config/apiUrl";

const Index = ({ name }) => {
  useEffect(() => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2.init({
        client_id:
          "62221799971-qvd35nkug0ctbns3f77e829i1c3opt3l.apps.googleusercontent.com",
      });
    });
  }, []);
  const handleSubmit = async () => {
    try {
      const response = await Axios.get(`${apiUrl}/api/auth/user`, {
        withCredentials: true,
        headers: {
          "x-api-key": process.env.X_API_KEY,
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div>
      <h1>Hello World {name}</h1>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
      <div>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      </div>
      <div>
        {/* <h1>{error ? JSON.stringify(error) : JSON.stringify(data)}</h1> */}
        <button onClick={handleSubmit}>Click</button>
      </div>
      <button
        onClick={() => {
          window.location.href = "https://dashboard.one-o.in";
        }}
      >
        Dashboard
      </button>
      <button
        onClick={async () => {
          try {
            const auth2 = window.gapi.auth2.getAuthInstance();
            if (auth2 != null) {
              auth2
                .signOut()
                .then(auth2.disconnect().then(() => console.log("Success")));
            }
            const response = await Axios.get(
              `${apiUrl}/api/auth/user/sign-out`,
              {
                withCredentials: true,
                headers: {
                  "x-api-key": process.env.X_API_KEY,
                },
              }
            );
            console.log(response);
          } catch (e) {
            console.log(e.response.data);
          }
        }}
      >
        Signout
      </button>
    </div>
  );
};

export default Index;
