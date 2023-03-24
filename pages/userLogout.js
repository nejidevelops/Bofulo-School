import React from "react";

function userLogout() {
  fetch("https://buildcon.herokuapp.com/logout", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location = "/";
    });

//   return <div>userLogout</div>;
}

export default userLogout;
