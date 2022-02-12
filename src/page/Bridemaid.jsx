import React, { useEffect, useRef } from "react";
// import { Carousel } from 'react-carousel-minimal';
import { Rerousel } from 'rerousel';

import test from '../assets/images/face-evita.jpg';

function Bridemaid() {

  const ref = useRef(null);

  // const Item = `
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: calc(100%/2);
  //   height: 100px;
  //   font-family: Signika;
  //   font-weight: bold;
  //   font-size: 1.5em;
  //   border: solid 1px black;
  //   background-color: #61DAFB;
    
  //   @media(max-width: 1150px) {
  //       width: 100%
  //   }
  // `;

  return (
    <Rerousel itemRef={ref}>
      <div className="carousel-briedsmaid" ref={ref}>1</div>
      <div className="carousel-briedsmaid">2</div>
      <div className="carousel-briedsmaid">3</div>
      <div className="carousel-briedsmaid">4</div>
      <div className="carousel-briedsmaid">5</div>
    </Rerousel>
  );
}

export default Bridemaid;
