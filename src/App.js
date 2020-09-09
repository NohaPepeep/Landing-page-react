import React from 'react';
import Header from './components/header/Header.jsx';
import Rent from './components/rent/Rent.jsx';
import Footer from './components/footer/Footer.jsx';
import Form from './Form.js';
import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Rent />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
