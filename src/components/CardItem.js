import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a
          className='cards__item__link'
          href={props.path} // Aici poți specifica URL-ul extern
          target='_blank' // Deschide link-ul într-o nouă fereastră sau tab
          rel='noopener noreferrer' // Este recomandat pentru securitate
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
