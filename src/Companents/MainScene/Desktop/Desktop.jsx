import React from 'react';
// TODO import './Mobile.css';

import Point from '../../Point/Point'

export default function App() {
    return(
        <nav className="area">
            <div className="bg"></div>
            <Point  posX='29%' text="Аренда мест" aside='rent'/>
            <Point  posX='46%' text="Мужской мастер" aside='men'/>
            <Point  posX='60%' text="Женский мастер" aside='women'/>
            <Point  posX='23%' posY='45%' text="Маникюр" aside='manicure'/>
            <Point  posX='69%' posY='49%' text="Педикюр" aside='pedicure'/>
      </nav>
    )
}