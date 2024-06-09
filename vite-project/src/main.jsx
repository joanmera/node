import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [buttonTexts, setButtonTexts] = useState(["Me gusta", "Me gusta", "Me gusta"]);

  const handleClick = (index) => {
    const newButtonTexts = buttonTexts.map((text, i) =>
      i === index ? (text === "Me gusta" ? "No me gusta" : "Me gusta") : text
    );
    setButtonTexts(newButtonTexts);
  };

  return (
    <React.Fragment>
      {buttonTexts.map((text, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {text}
        </button>
      ))}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);