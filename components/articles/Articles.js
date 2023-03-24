import React from "react";
import Article from "./Article";
// import Services from "../../sections/services";
function Articles({ articles, removeArticle, setData }) {
  return (
    <>
      <div>
        <h1
          style={{
            width: "200%",
            margin: "auto",
            paddingLeft: "275px",
            paddingBottom: "20px",
            fontWeight: "700",
          }}
        >
        
        </h1>
      </div>
      <div>
        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              {...article}
              removeArticle={removeArticle}
              setData={setData}
            />
          );
        })}
      </div>
      {/* <Article /> */}
    </>
  );
}
export default Articles;
