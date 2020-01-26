import React from 'react';
import './Point.css';

export default function(props) {
  return (
    <button className='Point' style={{left:props.posX, top:props.posY}}>
        { props.text }
   </button>
  );
}