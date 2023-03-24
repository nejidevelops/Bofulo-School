// import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { useState } from "react";
// import AppContext from "../components/AppContext";
// import '../styles/admin.css'

// function MyApp({ Component, pageProps }) {
//   const [currentUser, setCurrentUser] = useState();

//   return (
//     <AppContext.Provider value={{ currentUser, setCurrentUser }}>
//       <Component {...pageProps} />
//     </AppContext.Provider>
//   );
// }

// export default MyApp;

import "../styles/globals.css";
import Head from 'next/head';
import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.css";
import { useState, Fragment } from "react";
import AppContext from "../components/AppContext";
import '../styles/admin.css'

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState();

  return (
    <Fragment>
      <Head>
        <title>BuildCon</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />

        <link rel="icon" href="/pro.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <AppContext.Provider value={{ currentUser, setCurrentUser }}>
        <Component {...pageProps} />
      </AppContext.Provider>

      <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></Script>
    </Fragment>
  );
}

export default MyApp;
