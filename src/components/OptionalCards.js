import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import TextCardPlusButton from './TextCardPlusButton';
import TextCardPlusList from './TextCardPlusList';

function OptionalCards(props) {

  return (
    <div className='cards'>
      <h1>{props.title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://atlas-content-cdn.pixelsquid.com/assets_v2/281/2813492797011662235/jpeg-600/G03.jpg?modifiedAt=1'
              text='Cursurile opționale vor stabilite în funcție de cerințe'
              label='În viitor'
              
            />
          </ul>




        </div>
      </div>
    </div>
  );
}

export default OptionalCards;