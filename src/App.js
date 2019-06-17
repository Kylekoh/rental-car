import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main'
import Header from './components/Header'
import CarList from './components/CarList'
import Tenping from './components/Tenping'


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Main></Main>
    <CarList></CarList>
    <Tenping></Tenping>
    </div>
  );
}

export default App;
