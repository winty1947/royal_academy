import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Fade from 'react-reveal/Fade';

function HeroSection() {


  const scrollDownToGallery = () => {
    const imageSliderPosition = document.getElementById("imageSlider").offsetTop - 100;

    window.scrollTo({
      top: imageSliderPosition,
      behavior: "smooth"
    });
  };

  const scrollDownToAboutUs = () => {
    const aboutUsPosition = document.getElementById("aboutUsProgram").offsetTop -150;
    console.log(aboutUsPosition)

    window.scrollTo({
      top: aboutUsPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className='hero-container'>
       
      <h1>Bine ati venit pe Royal Academy!</h1>
      <Fade bottom duration={1000}>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={scrollDownToGallery}
        >
          Galerie foto
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={scrollDownToAboutUs}
        >
          Despre noi
        </Button>
        
      </div>
      </Fade>
    </div>
  );
}

export default HeroSection;