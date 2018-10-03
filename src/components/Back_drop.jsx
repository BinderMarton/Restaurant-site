import React from 'react';
import './Back_drop.css'

const BackDrop = (props) => {
       return (
           <div className="backdrop" onClick={props.click}></div>
       ) 
}

export default BackDrop;