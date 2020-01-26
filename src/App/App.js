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
            <Point  posX='-18%' text="Аренда мест"/>
            <Point  posX='38%' text="Мужской мастер"/>
            <Point  posX='84%' text="Женский мастер"/>
            <Point  posX='-35%' posY='51%' text="Маникюр"/>
            <Point  posX='120%' posY='55%' text="Педикюр"/>
          </nav>
        </main>
      </div>
    );
  }else{
    return (
      <div>mobile</div>
    );
  }
}
