import React from 'react';
import  logo from '../../static/logo.svg'
import './Header.css';

export default function Header() {
  return (
      <header className="Salon-header">
        <figure>
            <img src={logo} alt="Салон красоты"/>
            <h1>Салон Красоты "Ирис" г.Шахты</h1>
        </figure>
        <a href="tel:+79281863863">8 (928) 186-38-63</a>
        <address>г.Шахты, пер. Красный Шахты, 80</address>
      </header>
  );
}
