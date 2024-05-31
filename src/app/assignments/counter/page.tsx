"use client"

import { useState } from 'react';

export default function Assignment4() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(prevDislikes => prevDislikes + 1);
  };

  return (
    <div>
      <h2>좋아요 / 싫어요</h2>
      <div>
        <button onClick={handleLikeClick}>좋아요 {likes}</button>
        <button onClick={handleDislikeClick}>싫어요 {dislikes}</button>
      </div>
    </div>
  );
}