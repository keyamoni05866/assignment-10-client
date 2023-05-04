import React, { useState } from 'react';
import './SingleRecipe.css'
import { Button, Card, Container, Toast } from 'react-bootstrap';
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@smastrom/react-rating/style.css";
const SingleRecipe = ({recipe}) => {
    const {name,method,ingredients,rating} = recipe;
    const [favourite, setFavourite] = useState(false)
    console.log(recipe)

    const handleFavourite = () =>{
        setFavourite(true);
        toast('Recipe added into your favourite list')
    }
    return (
        <Container className=''>
           <Card style={{ width: '23rem' ,height:'510px'}}>
         
      <Card.Body>

     <Card.Title className='mb-0'>Recipe-Name: {name}</Card.Title>
        <Card.Text>
      
      

       <span className='fs-3'>Ingredients:

        {
            ingredients.map(ingredient => <li className='ingredient'>{ingredient}</li>)
        }
       </span>
         </Card.Text>
        <Card.Text className='mb-0'>
      
    <span className='fw-semibold '>Method:</span> {method}

        </Card.Text>

   <div className='recipe-footer'>
<div className='d-flex'>
<Rating
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly
              className="mb-4"
            />
            <span>{rating}</span>
</div>
        <Button onClick={handleFavourite} disabled={favourite} variant="primary" className='btn-for-favourite'>Add to Favourite 
   
        </Button>
        <ToastContainer></ToastContainer>
   </div>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default SingleRecipe;