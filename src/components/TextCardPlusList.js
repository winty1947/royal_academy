import React from 'react';
import './TextCardPlusButton.css';

function TextCardPlusList(props) {
  // Verificăm dacă prop-ul 'items' este definit și este un array
  if (!props.items || !Array.isArray(props.items) || props.items.length === 0) {
    return null; // În caz contrar, nu afișăm nimic
  }

  return (
    <div className="parent">
      <div className="card">
        <div className="content-box">
          <span className="card-title">{props.title}</span>
          <ul className="lowertext">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TextCardPlusList;
