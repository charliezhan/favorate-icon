import React, { useState } from 'react';
import heartEmpty from './heart-empty.png';
import heartFilled from './heart-filled.png';

import './App.css';


function App() {
  const [fav, setFav] = useState(false);
  const handelImageClick = () => {
    setFav(!fav);
  }
  return (
    <div className="App">
      <img id="heart" onClick={handelImageClick} src={fav ? heartFilled : heartEmpty} alt='heart' />
    </div>
  );
}

export default App;
