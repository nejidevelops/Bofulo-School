import { useState, useEffect } from "react";
import Link from "next/link";
import Comment from "../comments/Comment";
function Article({
  id,
  title,
  value,
  image_url,
  number_of_likes,
  removeArticle,
  setData,
  article,
}) {
  const [seeMore, setSeeMore] = useState(false);
//   const [likes, setLikes] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((current) => !current);
  };

//   useEffect(() => {
//     console.log(isLiked);
//   }, [isLiked]);

  // function handleLikeClick() {
  //     const updateLike = {
  //         likes: likes + 1
  //     }
  //     alert("Liked")
  //     fetch(`http://localhost:3000/articles/${id}`, {
  //         method: 'POST',
  //         headers: {
  //             'Content-type': 'application/json'
  //         },
  //         body: JSON.stringify(updateLike)
  //     })
  //         .then(r => r.json())
  //     .then()
  // }
  // const [apiData, setApiData] = useState([]);
  return (
    <div
      className="articles-page"
      style={{
        width: "200%",
        margin: "auto",
        paddingLeft: "275px",
        paddingBottom: "20px",
      }}
    >
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src={image_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">
                {seeMore ? value : `${value.substring(0, 200)}`}
              </p>
              <div>
                <button onClick={handleLikeClick} type="button">
                  <i class="fa-regular fa-thumbs-up"></i>
                </button>
                {isLiked ? "Liked" : null}
              </div>
              <button
                class="btn btn-outline-info btn-sm rounded"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? "Read less" : "Read more"}
              </button>
              <button
                className="delete-btn btn btn-danger"
                onClick={() => {
                  removeArticle(id);
                }}
              >
                Not interested in this Article
              </button>
              {/* <button
                className="btn-update btn btn-success"
                style={{ color: "white" }}
                onClick={() =>
                  setData(id, image_url, title, value, number_of_likes)
                }
              >
                <Link href="/updateArticle">Update Blog</Link>
              </button> */}
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article;
