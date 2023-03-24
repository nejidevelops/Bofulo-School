function Logout() {
    fetch("https://buildcon.herokuapp.com/logout", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location = "/";
      });
  }
  export default Logout;
  