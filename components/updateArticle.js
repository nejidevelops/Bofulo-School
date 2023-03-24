import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Router from "next/router";
import Header from "./header/header";
// import axios from "axios";
function UpdateArticle() {
  const [image_url, setImageURL] = useState("test image");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [number_of_likes, setNumberOfLikes] = useState("");
  const [id, setId] = useState(null);
  // console.log(imageURL)
  // console.log(title)
  // console.log(blogItem)
  const handleUpdateArticle = (e) => {
    e.preventDefault();
    fetch(`https://buildcon.herokuapp.com/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url,
        title,
        number_of_likes,
        value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        Router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //   const handleUpdateArticle = ()=> {
  //     axios.put(`http://127.0.0.1:3000/articles/${id}`, {
  //         image_url,
  //         title,
  //         value,
  //         number_of_likes,
  //       })
  //   };
  useEffect(() => {
    setImageURL(localStorage.getItem("image_url"));
    setTitle(localStorage.getItem("title"));
    setNumberOfLikes(localStorage.getItem("number_of_likes"));
    setValue(localStorage.getItem("value"));
    setId(localStorage.getItem("ID"));
  }, []);
  // console.log(localStorage)
  // console.log("xxxxxy ", image_url)
  return (
    <>
      <Header />
      <div
        style={{
          width: "70%",
          align: "center",
          margin: "auto",
          paddingTop: "80px",
        }}
      >
        <Form>
          <Form.Label htmlFor="basic-url">Your Image URL</Form.Label>
          <InputGroup
            className="mb-3"
            value={image_url}
            onChange={(e) => setImageURL(e.target.value)}
          >
            <InputGroup.Text id="basic-addon3">Image</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Your blog title.."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Likes</Form.Label>
            <Form.Control
              type="text"
              value={number_of_likes}
              placeholder="Technology is the way of the future"
              onChange={(e) => setNumberOfLikes(e.target.value)}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Blog</Form.Label>
            <Form.Control
              as="textarea"
              value={value}
              rows={15}
              placeholder="Technology is the way of the future....."
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button type="submit" variant="success" onClick={handleUpdateArticle}>
          Update Blog
        </Button>
      </div>
    </>
  );
}
export default UpdateArticle;
