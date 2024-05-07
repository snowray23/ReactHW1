import React from 'react';
import Header from './header';
import About from './About';
import Contact from './Contact';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree'
const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Contact />
      <div className="gallery">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
};

export default App;