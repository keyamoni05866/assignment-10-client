import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import "./RecipeDetails.css";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
const RecipeDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const recipeAndChef = useLoaderData();
  const {
    chef_name,
    chef_image,
    description,
    likes,
    numbers_of_recipes,
    experience,
    chef_ratings,
    recipes
  } = recipeAndChef;
  // console.log(recipes)
  return (
    <Container>
      <div className="recipe-details">
        <div className="w-50 recipe-image">
          <img src={chef_image} alt="" className="" />
        </div>
        <div className="w-50 recipe-info">
          <h2 className="chef-title">Chef-Name: {chef_name}</h2>
          <p className="description-for-chef"><span className="fw-semibold">Description:</span> {description}</p>
          <div className="d-flex mt-5 ">
            <h5 className="me-4">Numbers of Recipes: {numbers_of_recipes}</h5>
            <h5 className="ms-5">Experience: {experience}</h5>
          </div>
          <p className="justify-content-center  d-flex align-items-center mt-5 me-5 ">
            {" "}
            <FaThumbsUp className="fs-3 text-primary"></FaThumbsUp>{" "}
            <span className="me-5 fs-4">{likes}</span>
            <Rating
              style={{ maxWidth: 150 }}
              value={chef_ratings}
              readOnly
              className="ms-5"
            />
            <span className="fs-4">{chef_ratings}</span>
          </p>
        </div>

        
      </div>
      <h2 className="chef-title text-decoration-underline">BEST RECIPE'S</h2>

      <div className='d-flex g-2   align-items-center recipes-info '>
        {
          recipes.map(recipe => 
           <SingleRecipe
               key={recipe.recipe_id}
               recipe ={recipe}
           ></SingleRecipe>
          )
        }
      </div>
    </Container>
  );
};

export default RecipeDetails;
