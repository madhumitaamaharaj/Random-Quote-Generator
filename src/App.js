import React, { useState } from 'react';
import './style.css';

const quotes = [
  "I am open to the opportunities today brings.",
  "Serenity, tranquillity, and other pleasurable emotions engulf my being.",
  "Good things continually happen to me.",
  "Everything is working out for my highest good.",
  "I believe in my potential.",
  "My peace is my power.",
  "I am healing",
  "I am blessed, loved, and supported.",
  "Today I am aiming for good enough, not perfection.",
  "I am committed to personal growth today"
];

function App() {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default App;
