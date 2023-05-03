import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './RecipeDetails.css'
import { FaThumbsUp} from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const RecipeDetails = () => {
    const {id} = useParams()
    // console.log(id)
    const recipe = useLoaderData();
    const {chef_name,chef_image,description,likes,numbers_of_recipes,experience,chef_ratings} = recipe;
    // console.log(recipes)
    return (
        <Container>
           <div className='recipe-details'>
            <div className='w-50 recipe-image'>
               <img src={chef_image} alt="" className=''/>
            </div>
            <div className='w-50 recipe-info'>
               <h2 className='chef-title'>Chef-Name: {chef_name}</h2>
               <p className='description-for-chef'>Description: {description}</p>
             <div className='d-flex mt-5 '>
             <h5 className='me-4'>Numbers of Recipes: {numbers_of_recipes}</h5>
               <h5 className='ms-5'>Experience: {experience}</h5>
             </div>
               <p className='justify-content-center  d-flex align-items-center mt-5 me-5 '> <FaThumbsUp className='fs-3 text-primary'></FaThumbsUp> <span className='me-5 fs-4'>{likes}</span>
       <Rating style={{ maxWidth: 150 }} value={chef_ratings} readOnly className='ms-5' />
         <span className='fs-4' >{chef_ratings}</span>

       </p>

            </div>
           </div>

        </Container>
    );
};

export default RecipeDetails;