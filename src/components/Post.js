import React, { useState } from "react";
import "../css/Post.css";

function Post({ image, username, timestamp, message }) {
  const [likes, setLikes] = useState(100);
  const [dislikes, setDisLikes] = useState(100);
  const [likeactive, setLikeActive] = useState(false);
  const [dislikeactive, setDislikeActive] = useState(false);

  function like() {
    if (likeactive) {
      setLikeActive(false);
      setLikes(likes - 1);
    } else {
      setLikeActive(true);
      setLikes(likes + 1);
    }
    if (dislikeactive) {
      setDislikeActive(false);
      setLikes(likes + 1);
      setLikes(dislikes - 1);
    }
  }

  function disLike() {
    if (dislikeactive) {
      setDislikeActive(false);
      setDisLikes(dislikes - 1);
    } else {
      setDislikeActive(true);
      setDisLikes(dislikes + 1);
    }
    if (likeactive) {
      setLikeActive(false);
      setLikes(likes - 1);
      setDisLikes()
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
          <button onClick={like}>👍</button>
          <button>👎</button>
          <button>✉️</button>
          <button>🔀</button>
          <button>🚩</button>
        </div>
        <p>{likes} {likes > 1 ? "people have" : "person has"} liked this</p>
        <button>💬</button>
        <p>Comments</p>
      </div>
    </div>
  );
}

export default Post;
