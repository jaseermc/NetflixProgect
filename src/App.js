
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {originals,rated,popular} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Oringinals' />
      <RowPost url={popular} title='Popular Movies' isSmall />
      <RowPost url={rated} title='Top Rated Movies' isSmall />
    </div>
  );  
}


export default App;
