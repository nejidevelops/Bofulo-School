import React, { useState } from "react";
import Router from "next/router";
export default function Comment({ x, article_id }) {
//   console.log(article_id);
  const [newC, setNewC] = useState({
    value: "",
    user_id: 4,
    article_id: article_id,
  });
  const [comments, setComments] = useState(x);
  const [showComments, setShowComments] = useState(false);
  const [postEdit, setPostEdit] = useState(true);
  //   const navigate = useNavigate();
  // function addList(added) {
  //   setComments([...comments, added]);
  // }
  //   function updateList(updatedItem) {
  //     const updatedItems = comments.map((comment) => {
  //       if (comment.id === updatedItem.id) {
  //         return updatedItem;
  //       } else {
  //         return comment;
  //       }
  //     });
  //     setComments(updatedItems);
  //   }
  function deleteEvent(id) {
    const updatedEvents = comments?.filter((one) => one.id !== id);
    setComments(updatedEvents);
  }
  function Submit(e) {
    e.preventDefault();
    // if (user) {
    //   if (postEdit) {
    console.log(newC);
    fetch("https://buildcon.herokuapp.com/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newC),
    })
      .then((response) => response.json())
      .then((data) => {
        // addList(data);
        setNewC({ value: "", user_id: "", article_id: "" });
      });
    // } else {
    //   console.log(newC);
    //   fetch(`http://127.0.0.1:3000/comments/${newC.id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newC),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(data)
    //       // updateList(data);
    //       setNewC({ value: "", user_id: 2, article_id: 3});
    //       setPostEdit(true);
    //     });
    // }
    // } else {
    // //   navigate("/login");
    // // Router.push("/userLogin")
    // }
  }
  function handleEdit(comment) {
    setPostEdit(false);
    setNewC(comment);
  }
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewC({
      ...newC,
      [name]: value,
    });
  }
  function handleDelete(id) {
    fetch(`https://buildcon.herokuapp.com/comments/${id}`, {
      method: "DELETE",
    });
    deleteEvent(id);
  }
  const body = comments?.map((comment) => {
    return (
      <li className="pb-1" key={comment.id}>
        {comment.value}
        {user?.id === comment.user_id ? (
          <span className="mx-2">
            <button
              onClick={() => handleDelete(comment.id)}
              className="bg-danger text-white shadow-none border-0"
            >
              X
            </button>
            <button
              onClick={() => handleEdit(comment)}
              className="bg-info mx-2 text-white shadow-none border-0"
            >
              Edit
            </button>
          </span>
        ) : (
          ""
        )}
      </li>
    );
  });
  return (
    <div>
      <div className="col-1"></div>
      <div className="col">
        <hr className=""></hr>
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              onClick={() => setShowComments(!showComments)}
            >
              Comments
            </button>
          </h2>
        </div>
      </div>
      {showComments ? (
        <div className="row p-0">
          <div className="col-1"></div>
          <div className="col-10">
            <p className="text-info fst-italic">
              {comments?.length === 0
                ? "No comments for this article, be the first to leave a comment"
                : ""}
            </p>
            <ul className="list-unstyled">{body}</ul>
            <hr className=""></hr>
            <div class="col-10 d-flex">
              <form>
                <input
                  value={newC.value}
                  onChange={handleChange}
                  type="text"
                  name="value"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Leave a comment"
                />
              </form>
              <button
                onClick={(e) => Submit(e)}
                type="button shadow-none"
                class="btn shadow-none fw-bolder"
              >
                {postEdit ? "Submit" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <hr className=""></hr>
    </div>
  );
}
