import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Acasa from './components/pages/Acasa';
import Footer from './components/Footer';
import After from './components/pages/Afters';
import Before from './components/pages/Befores';
import LoadingScreen from './components/LoadingScreen';
import Optionale from './components/pages/Optionale';
import Contact  from './components/pages/Contact';
import {Navigate} from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
    {loading ? (
      <LoadingScreen />
    ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Acasa />} />
        <Route path='/after-school' element={<After />} />
        <Route path='/before-school' element={<Before />} />
        <Route path='/optionale' element={<Optionale />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>)
}
    </>

  );
}

export default App;
