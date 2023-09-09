import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import TextCardPlusButton from './TextCardPlusButton';
import TextCardPlusList from './TextCardPlusList';
import TextCardPlusText from './TextCardPlusText';
import Fade from 'react-reveal/Fade';

function AboutUsCards(props) {

  return (
    
    <div className='cards'>
      <Fade bottom duration={1000}>
      <div id="aboutUsProgram" className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          <TextCardPlusText 
          title="Cine suntem noi?" 
          text="Situat în sectorul 3, Royal Academy este un centru educativ adresat copiilor din școlile generale, fiind creat în vederea oferirii unei educații de calitate."
          />
          <TextCardPlusText
          
          title="Care este scopul nostru?"
          text="Royal Academy s-a înființat din dragostea pentru copii, în scopul formării unei personalități puternice, armonioase și creative. Centrul nostru promovează dezvoltarea caracterului, asigurând un cadru educaționat cât mai variat și performant."

          />
          </ul>
          <ul className='cards__items'>
            <TextCardPlusText
            title="Despre locația noastră"
            text="Clădirea Royal Academy este foarte spațioasă, având 465mp, iar curtea din jurul clădirii în care ne desfășurăm activitatea beneficiază de un loc de joacă, putând fi organizate activități în aer liber."

            />
            <TextCardPlusList
            title="Programul de lucru"
            items={["Luni - Vineri: 08:00 - 12:00 (Before school)","Luni - Vineri: 11:00 - 18:00 (After school) ", "Sâmbătă - Duminică: Închis"]}
            />
            </ul>
          
        </div>
      </div>
      </Fade>
    </div>
    
  );
}

export default AboutUsCards;