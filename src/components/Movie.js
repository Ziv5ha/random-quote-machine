import React from 'react';

export default function Movie({ movie, color }) {
  return (
    <div id='author' style={{ color: color }}>
      {movie}
    </div>
  );
}
