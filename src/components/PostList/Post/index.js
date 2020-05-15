import React from "react";
import "./styles.css";
import Comment from "./Comment";

function Post({ data }) {
  return (
    <>
      <div className="header">
        <img src={data.author.avatar} alt="" />
        <div>
          <p>{data.author.name}</p>
          <span>{data.date}</span>
        </div>
      </div>

      <p>{data.content}</p>

      {data.comments.length !== 0 ? (
        <>
          <div className="line" />
          {data.comments.map((c) => (
            <Comment key={c.id} data={c} />
          ))}
        </>
      ) : null}
    </>
  );
}

export default Post;
