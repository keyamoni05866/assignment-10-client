import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import banner1 from "../../assets/banner6.avif";
import banner2 from "../../assets/banner5.avif";
import banner3 from "../../assets/banner3.avif";

import "./Banner.css";

const Banner = () => {
  return (
    <Container className="banner ">
      <Carousel>
        <Carousel.Item>
          <img className=" w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="banner-title">
              <h3 className="heading">Meet Our Masterful Chinese Chefs</h3>
              <p className="title">
                Our chefs come from different regions of China, each bringing
                their unique flair and regional specialties to our restaurant.
                They are constantly experimenting with new ingredients and
                cooking techniques to bring you the most authentic and delicious
                Chinese cuisine possible..
              </p>
              <Button className="button-login py-3 px-5 mt-3">
                Get Started
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Second slide" />
          <Carousel.Caption>
            <div className="banner-title">
              <h3 className="heading">Meet Our Masterful Chinese Chefs</h3>
              <p className="title">
                Our chefs come from different regions of China, each bringing
                their unique flair and regional specialties to our restaurant.
                They are constantly experimenting with new ingredients and
                cooking techniques to bring you the most authentic and delicious
                Chinese cuisine possible..
              </p>
              <Button className="button-login py-3 px-5 mt-3">
                Get Started
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Third slide" />

          <Carousel.Caption>
            <div className="banner-title">
              <h3 className="heading">Meet Our Masterful Chinese Chefs</h3>
              <p className="title">
                Our chefs come from different regions of China, each bringing
                their unique flair and regional specialties to our restaurant.
                They are constantly experimenting with new ingredients and
                cooking techniques to bring you the most authentic and delicious
                Chinese cuisine possible..
              </p>
              <Button className="button-login py-3 px-5 mt-3">
                Get Started
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
