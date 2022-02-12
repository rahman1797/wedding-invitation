import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import test from '../assets/images/face-evita.jpg';

function Bridemaid() {

  const data = [
    {
      image: test,
      caption: `<div>
                  Evita
                  <br/>
                  Mungil
                </div>`
    },
    {
      image: test,
      caption: `<div>
                  Evita
                  <br/>
                  Lagi
                </div>`
    },
    {
      image: test,
      caption: `<div>
                  Evita
                  <br/>
                  Wooooooooo
                </div>`
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "80px 60px"
        }}>
          <Carousel
            data={data}
            time={1000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            // automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Bridemaid;
