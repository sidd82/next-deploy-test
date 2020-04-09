// import App from 'next/app'

import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Axios from "axios";

function MyApp({ Component, pageProps }) {
  const [isRender, setIsRender] = useState(false);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // useEffect(() => {
  //   console.log("Ram");
  //   (async function () {
  //     setIsRender(true);
  //     const response = await Axios.get("http://localhost:5000/api/auth/user", {
  //       withCredentials: true,
  //       headers: {
  //         api_auth: "Si78757875",
  //       },
  //     });
  //     setIsRender(false);
  //   })();
  // }, []);
  return isRender ? (
    <>
      <p>Loading...</p>
    </>
  ) : (
    <Component {...pageProps} />
  );
}

export default withRouter(MyApp);
