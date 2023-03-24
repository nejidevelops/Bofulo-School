import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Router from "next/router";
import Header from "../components/header/header";

function WriteArticle() {
  const [image_url, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [number_of_likes, setNumberOfLikes] = useState("");
  // const [category_id, setCategoryId] = useState(3)
  // const [user_id, setUserId] = useState(3)
  // const navigate = useNavigate();
  const handlePublishBlog = (e) => {
    e.preventDefault();
    fetch("https://buildcon.herokuapp.com/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url,
        title,
        value,
        number_of_likes,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        Router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div style={{ width: "70%", align: "center", margin: "auto", marginTop: '80px' }}>
      <Header/>
      <Form>
        <Form.Label htmlFor="basic-url">Your Image URL</Form.Label>
        <InputGroup
          className="mb-3"
          onChange={(e) => setImageURL(e.target.value)}
        >
          <InputGroup.Text id="basic-addon3">
            Enter Image Url
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your blog title.."
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Likes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Technology is the way of the future"
            onChange={(e) => setNumberOfLikes(e.target.value)}
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Blog</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            placeholder="Write your blog here....."
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="success" onClick={handlePublishBlog}>
        Publish Blog
      </Button>
    </div>
  );
}
export default WriteArticle;
