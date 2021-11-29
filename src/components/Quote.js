import React from 'react';

export default function Quote({ quote, color }) {
  return (
    <div id='text' style={{ color: color }}>
      <i class='fas fa-quote-left'></i>
      {quote}
      <i class='fas fa-quote-right'></i>
    </div>
  );
}
