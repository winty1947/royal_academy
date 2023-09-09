import React from 'react';
import './TextCardPlusButton.css';

function TextCardPlusButton(props) {
  return (
<div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">{props.title}</span>
          <p class="card-content">
              {props.text}
          </p>

      </div>

  </div>
</div>

  );
}

export default TextCardPlusButton;