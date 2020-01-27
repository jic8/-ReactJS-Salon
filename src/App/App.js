import React from 'react';
import Header from '../Companents/Header/Header'
import Point from '../Companents/Point/Point'
import './App.css';

export default function App() {
  const clienWidth = document.body.clientWidth
  if(clienWidth >= 426){
    return (
      <div className="App">
        <Header />
        <main className="Salon-main">
          <nav className="area">
            <div className="bg"></div>
            <Point  posX='29%' text="Аренда мест"/>
            <Point  posX='46%' text="Мужской мастер"/>
            <Point  posX='60%' text="Женский мастер"/>
            <Point  posX='23%' posY='48%' text="Маникюр"/>
            <Point  posX='69%' posY='51%' text="Педикюр"/>
          </nav>
        </main>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header />
        <nav className="area">
          <ul>
            <Point text="Мужской мастер"/>
            <Point text="Женский мастер"/>
            <Point text="Маникюр"/>
            <Point text="Педикюр"/>
            <Point text="Аренда мест"/>
          </ul>
        </nav>
      </div>
    );
  }
}
