import React from 'react';

export default function TweetBtn({ quote, movie, color }) {
  return (
    <a
      id='tweet-quote'
      href={`https://twitter.com/intent/tweet?text="${quote}"%20from%20${movie}&hashtags=movie_quote`}
      target='_blank'
      rel='noreferrer'
      style={{ color: color }}
    >
      <i class='fab fa-twitter-square'></i>
    </a>
  );
}
