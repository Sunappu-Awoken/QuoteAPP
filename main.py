import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  const handleClick = () => {
    fetchQuote();
  };

  const tweetQuote = () => {
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetURL, '_blank');
  };

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
