import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../assets/banner6.avif'
import './Banner.css'

const Banner = () => {
    return (
        <Container className='banner position-relative' >
  
        <img src={banner} alt="" className=''  />
        <div className='position-absolute top-0 start-50 pe-2  w-50'>
        <h2 className='heading fs-2'>Meet Our Masterful Chinese Chefs</h2>
        <p className='title'>Our chefs come from different regions of China, each bringing their unique flair and regional specialties to our restaurant. They are constantly experimenting with new ingredients and cooking techniques to bring you the most authentic and delicious Chinese cuisine possible..</p>

        </div>
        
        </Container>
    );
};

export default Banner;