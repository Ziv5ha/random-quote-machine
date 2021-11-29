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
  if (getQuote) {
    setQuote(movieQuote.getSomeRandom(1)[0]);
    setGetQuote(false);
  }
  return (
    <div className='App' id='quote-box'>
      <Quote quote={quote ? quote.quote : ''} />
      <Movie movie={quote ? quote.movie : ''} />
      <NextQuoteBtn setGetQuote={setGetQuote} />
      <TweetBtn />
    </div>
  );
}

export default App;
