function AdminLogout() {
  fetch("https://buildcon.herokuapp.com/admin_logout", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location = "/";
    });
}
export default AdminLogout;
