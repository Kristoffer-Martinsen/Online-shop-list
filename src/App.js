import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShopList from './Components/ShopList';

function App() {
  return (
    <div>
      <Header/>
      <div className="w-4/5 m-auto">
        <ShopList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
