import React, { useRef } from 'react';

export default function NextQuoteBtn({ setGetQuote, color }) {
  const btn = useRef(null);
  return (
    <button
      ref={btn}
      id='new-quote'
      onClick={() => setGetQuote(true)}
      style={{ backgroundColor: color }}
      onMouseDown={() => {
        btn.current.style.boxShadow = 'none';
      }}
      onMouseUp={() => {
        btn.current.style.boxShadow = '0 0 5px 1px rgb(44, 43, 43)';
      }}
    >
      New quote <i class='fas fa-paper-plane'></i>
    </button>
  );
}
