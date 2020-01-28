import React from 'react';
import './Point.css';
import {
  Route,
  NavLink
} from "react-router-dom";

export default function(props) {
  return (
    <Route>
      <NavLink className='Point' 
              style={{left:props.posX, top:props.posY}}
              to={props.aside}>
          { props.text }
    </NavLink>
    </Route>
  );
}