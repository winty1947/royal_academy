import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ImageSlider from '../ImageSlider';
import TextCard from '../TextCardPlusButton';
import CardItem from '../CardItem';
import AboutUsCards from '../AboutUsCards';
import Fade from 'react-reveal/Fade';

let inaltime = 700;
if (window.innerWidth <= 960) {
  inaltime = 400;
}

const Acasa = () => {
  const slides = [
    { url: "https://www.careeraddict.com/uploads/article/60165/woman-teaching-english-classroom.jpg", title: "Prima" },
    { url: "https://ssww-blog.s3.amazonaws.com/blog/wp-content/uploads/physical-education-teacher.jpg", title: "A doua" },
    { url: "https://as1.ftcdn.net/v2/jpg/01/66/41/00/1000_F_166410016_D0cEh7P11J4PGd49lfrLjKO2OoSDiDCm.jpg", title: "A treia" },
    { url: "https://attitudedance.ro/cdn/shop/products/custom_resized_8f063de3-c620-41d9-85da-3dd7ffd667e5.jpg?v=1669717260", title: "A patra" },
    { url: "https://www.victoriadancestudio.ro/images/2020/10/19/balet-copii-2.jpg", title: "A cincea" },
  ];

  const containerStyles = {
    width: '100%',
    height: inaltime,
    margin: '0 auto'
  };

  return (
    <>
      <HeroSection />
      <div className="cards">
        <div id="imageSlider" style={containerStyles}>
        
          <ImageSlider slides={slides} />
          
        </div>
      </div>
      <AboutUsCards />
    </>
  );
};



export default Acasa; // Exportă componenta Acasa
