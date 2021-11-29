import { useEffect, useState } from 'react';
import './App.css';
import NextQuoteBtn from './components/NextQuoteBtn';
import Quote from './components/Quote';
import TweetBtn from './components/TweetBtn';
import movieQuote from 'popular-movie-quotes';
import Movie from './components/Movie';

function App() {
  const [quote, setQuote] = useState(null);
  const [getQuote, setGetQuote] = useState(true);
  const [color, setColor] = useState(getRandomColor());
  // if (getQuote) {
  // useEffect(() => {
  //   const randomColor = getRandomColor();
  //   console.log(randomColor);
  //   setColor(randomColor);
  //   document.body.style.backgroundColor = color;
  // }, [getQuote]);
  // setQuote(movieQuote.getSomeRandom(1)[0]);
  // setGetQuote(false);
  // }
  useEffect(() => {
    if (getQuote) {
      const randomColor = getRandomColor();
      console.log(randomColor);
      setColor(randomColor);
      document.body.style.backgroundColor = randomColor;
      setQuote(movieQuote.getSomeRandom(1)[0]);
      setGetQuote(false);
    }
  }, [getQuote]);
  return (
    <div className='App' id='quote-box'>
      <Quote quote={quote ? quote.quote : ''} color={color} />
      <Movie movie={quote ? quote.movie : ''} color={color} />
      <div className='btn-container'>
        <TweetBtn
          quote={quote ? quote.quote : ''}
          movie={quote ? quote.movie : ''}
          color={color}
        />
        <NextQuoteBtn setGetQuote={setGetQuote} color={color} />
      </div>
    </div>
  );
}

export default App;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
