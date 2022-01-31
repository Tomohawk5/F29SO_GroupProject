import React, { useState } from "react";
import "./Post.css";

function Post({ image, username, timestamp, message }) {
  const [like, setLike] = useState(100);
  const [dislike, setDisLike] = useState(100);
  const [likeactive, setLikeActive] = useState(false);
  const [dislikeactive, setDislikeActive] = useState(false);

  function Like() {
    if (likeactive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
    }
    if (dislikeactive) {
      setDislikeActive(false);
      setLike(like + 1);
      setLike(dislike - 1);
    }
  }

  function disLike() {
    if (dislikeactive) {
      setDislikeActive(false);
      setDisLike(dislike - 1);
    } else {
      setDislikeActive(true);
      setDisLike(dislike + 1);
    }
    if (likeactive) {
      setLikeActive(false);
      setLike(like - 1);
      setDisLike()
    }
  }

  return (
    <div className="post">
      <div className="postHeader">
        <h3>{username}</h3>
        <p>{timestamp}</p>
      </div>
      <figure className="postContent">
        <img src={image} />
        <figcaption>{message}</figcaption>
      </figure>
      <div className="postFooter">
        <div className="postReactions">
          <button onClick={Like}>👍</button>
          <button>👎</button>
          <button>✉️</button>
          <button>🔀</button>
          <button>🚩</button>
        </div>
        <p>{like} {like > 1 ? "people have" : "person has"} liked this</p>
        <button>💬</button>
        <p>Comments</p>
      </div>
    </div>
  );
}

export default Post;
