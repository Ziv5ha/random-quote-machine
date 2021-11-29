import React from 'react';

export default function NextQuoteBtn({ setGetQuote, color }) {
  return (
    <button
      id='new-quote'
      onClick={() => setGetQuote(true)}
      style={{ backgroundColor: color }}
    >
      New quote <i class='fas fa-paper-plane'></i>
    </button>
  );
}
