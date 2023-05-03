import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './ChefCards.css'
import { FaThumbsUp} from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const ChefCards = ({chef}) => {

    const {chef_name,experience,numbers_of_recipes,likes,chef_image,chef_ratings, _id} = chef;
    console.log(chef)
    return (
        <Container>
              <Card >
      <Card.Img variant="top" src={chef_image} />
      <Card.Body>
        <Card.Title className='text-center'>Chef-Name: {chef_name}</Card.Title>
       <p className='experience ps-3'>

        Experience: {experience}
        <span className='ps-3'>Number of Recipes: {numbers_of_recipes}</span>
       </p>
       <p className='justify-content-center   d-flex align-items-center '> <FaThumbsUp className='fs-5  text-primary'></FaThumbsUp> <span className='me-5'>{likes}</span>
       <Rating style={{ maxWidth: 100 }}  value={chef_ratings} readOnly className='ms-4' />
         <span >{chef_ratings}</span>

       </p>

        
      <Link className='text-decoration-none text-white' to={`/recipe/${_id}`}>   <Button className='btn-for-view-recipes'>View Recipes </Button></Link>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default ChefCards;