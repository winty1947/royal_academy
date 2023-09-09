import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import TextCardPlusButton from './TextCardPlusButton';
import TextCardPlusList from './TextCardPlusList';

function ContactCards(props) {

  return (
    <div className='cards'>
      <h1>{props.title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='https://atlas-content-cdn.pixelsquid.com/assets_v2/281/2813492797011662235/jpeg-600/G03.jpg?modifiedAt=1'
              text='B-dul Nicolae Grigorescu nr. 97, sector 3, București'
              label='Locație'
              path='https://www.google.com/maps/place/Bulevardul+Nicolae+Grigorescu+97,+Bucure%C8%99ti+077160/@44.4067904,26.1638158,15z/data=!4m6!3m5!1s0x40b1fe9c56422589:0x7c1f5ee4d37a2db5!8m2!3d44.406967!4d26.163958!16s%2Fg%2F11c5q07s7z?entry=ttu'
              
            />

            <CardItem
              src='https://media.istockphoto.com/id/1259095163/photo/happy-businesswoman-using-mobile-and-laptop-while-working-at-home.jpg?s=612x612&w=0&k=20&c=D-nEybbT-5UIgU8WdiWGQ6NantWqJ9aZDKUY6INNwC8='
              text="Număr de telefon: 0733 652 572"
              label='Telefon'              
              
            />
          </ul>

          <ul className='cards__items'>
            
            <CardItem
              src='https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png'
              text='Facebook: Royal Academy'
              label='Social Media'
              path="https://www.facebook.com"
              
            />

            <CardItem
              src='https://static.vecteezy.com/system/resources/previews/024/170/870/original/instagram-icon-logo-symbol-free-png.png'
              text='Instagram: @royalacademy'
              label='Social Media'
              path="https://www.instagram.com"
              
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default ContactCards;