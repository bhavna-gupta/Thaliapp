import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{height:"400px"}}>
        <img
          className="d-block w-100"
          src="https://static.toiimg.com/photo/msid-66178926/66178926.cms"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"400px"}}>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/-yqgxNuz9Fo/maxresdefault.jpg"
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"400px"}}>
        <img
          className="d-block w-100"
          src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/5/23/indian-thali.jpg"
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>

          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;