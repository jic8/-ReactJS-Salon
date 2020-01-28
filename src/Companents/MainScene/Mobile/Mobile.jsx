import React from 'react';
// import './Mobile.css';

import Point from '../../Point/Point'

export default function App() {
    return(
        <nav className="area">
            <ul>
            <Point text="Мужской мастер" aside='men'/>
            <Point text="Женский мастер" aside='women'/>
            <Point text="Маникюр" aside='manicure'/>
            <Point text="Педикюр" aside='pedicure'/>
            <Point text="Аренда мест" aside='rent'/>
            </ul>
        </nav>
    )
}