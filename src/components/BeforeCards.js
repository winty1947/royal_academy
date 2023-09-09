import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import TextCardPlusButton from './TextCardPlusButton';
import TextCardPlusList from './TextCardPlusList';

function BeforeCards(props) {

  return (
    <div className='cards'>
              <ul className='cards__items'>
          <TextCardPlusList 
          title="Ofertă educațională" 
          items={['Program zilnic (luni - vineri, 08:00 - 12:00)','Tarif: 300 RON (avans) + 1600 RON (taxă de școlarizare)']}
          />
          <TextCardPlusList
          
          title="Alte servicii oferite:"
          items={[
            'Efectuarea temelor cu profesori calificați',
            'Activități recreative',
            'Masa de prânz',
            'Transportul copiilor la școală'
        ]}
          />
          </ul>
      <h1>{props.title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.careeraddict.com/uploads/article/60165/woman-teaching-english-classroom.jpg'
              text='Cursuri de limba engleză'
              label='Before school'
              
            />
            <CardItem
              src='https://ssww-blog.s3.amazonaws.com/blog/wp-content/uploads/physical-education-teacher.jpg'
              text='Ore de sport'
              label='Before school'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://as1.ftcdn.net/v2/jpg/01/66/41/00/1000_F_166410016_D0cEh7P11J4PGd49lfrLjKO2OoSDiDCm.jpg'
              text='Cursuri de pictură'
              label='Before school'
            />
            <CardItem
              src='https://attitudedance.ro/cdn/shop/products/custom_resized_8f063de3-c620-41d9-85da-3dd7ffd667e5.jpg?v=1669717260'
              text='Lecții de dans'
              label='Before school'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.victoriadancestudio.ro/images/2020/10/19/balet-copii-2.jpg'
              text='Lecții de balet'
              label='Before school'
            />
            <CardItem
              src='https://media.evz.ro/wp-content/uploads/2022/09/karate-copii-kimono-1024x683.jpg'
              text='Cursuri de karate'
              label='Before school'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://robofunblogblog.files.wordpress.com/2020/12/robotica-pentru-copii.png'
              text='Ore de robotică'
              label='Before school'
            />
            <CardItem
              src='https://mymodernmet.com/wp/wp-content/uploads/2021/05/summer-arts-and-crafts-supplies-1.jpg'
              text='Arts and crafts'
              label='Before school'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.focuspeinima.ro/wp-content/uploads/2021/06/gewaltfreie-kommunikation-grundschule.jpg'
              text='Lecții de comunicare'
              label='Before school'
            />
            <CardItem
              src='https://www.followme.ro/wp-content/uploads/2021/08/activitati-dezvoltare-personala-copii.jpg'
              text='Dezvoltare personală'
              label='Before school'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeforeCards;