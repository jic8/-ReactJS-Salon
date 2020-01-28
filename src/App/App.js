import React from 'react';
import Header from '../Companents/Header/Header'
import Mobile from '../Companents/MainScene/Mobile/Mobile'
import Desktop from '../Companents/MainScene/Desktop/Desktop'
import Aside from '../Companents/Aside/Aside'
import './App.css';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  const clienWidth = window.screen.width
  const scrine = clienWidth >= 641  ?  <Desktop /> : <Mobile />;

  return(
    <div className="App">
      <Header />
        <main className="Salon-main"> { scrine } </main>
          <Switch>
            <Route path="/men"><Aside /></Route>
          </Switch>
    </div>
  )
}
