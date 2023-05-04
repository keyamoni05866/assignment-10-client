import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ExtraSection2.css";
import recipeImage1 from "../../assets/food1.webp";
import recipeImage2 from "../../assets/food2.webp";
import recipeImag3 from "../../assets/food3.webp";
import chefImg1 from "../../assets/chef5.jfif";
import chefImg2 from "../../assets/chef4.jfif";
import chefImg3 from "../../assets/chef6.jfif";
const ExtraSection2 = () => {
  return (
    <Container>
      <h2 className="chef-title mb-5 text-decoration-underline">
        POPULAR RECIPE'S.
      </h2>

      <div className="recipe-section ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={recipeImage1} />
          <Card.Body>
            <Card.Title>Recipe-Name: Mapo tofu</Card.Title>
            <Card.Text>
              A spicy and savory Sichuan dish made with tofu, ground pork,
              fermented black beans, garlic, ginger, and Sichuan peppercorns.
              The dish is named after the "pockmarked grandma" who is credited
              with inventing it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={recipeImage2} />
          <Card.Body>
            <Card.Title>Recipe-Name:Kung Pao </Card.Title>
            <Card.Text>
              A classic Szechuan dish made with diced chicken, peanuts,
              vegetables, and a spicy sauce made with chili peppers, Szechuan
              peppercorns, and soy sauce. The dish is stir-fried quickly to
              create a deliciously savory and slightly spicy flavor.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={recipeImag3} />
          <Card.Body>
            <Card.Title>Recipe-Name: Dumplings</Card.Title>
            <Card.Text>
              A Chinese staple, dumplings are made by wrapping a filling
              (usually a mixture of ground meat and vegetables) in thin,
              circular dough wrappers. The dumplings are typically steamed,
              boiled, or pan-fried, and served with a dipping sauce made of soy
              sauce, vinegar, and chili oil.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Container>
        <h2 className="chef-title mt-5 text-decoration-underline ">
          OUR TALENT CHEFS
        </h2>
        <p className="text-center fs-5">
          Those chef's are really talented and very popular also.
        </p>

        <div className="recipe-section">
          <div className="img1">
            <img src={chefImg1} alt="" className="" />
            <h5 className="text-center ps-5 pt-2">Chef Lee</h5>
          </div>
          <div className="img1">
            <img src={chefImg2} alt="" />
            <h5 className="text-center ps-5 pt-2">Chef Wang</h5>
          </div>
          <div className="img1">
            <img src={chefImg3} alt="" />
            <h5 className="text-center ps-5 pt-2">Chef Chen</h5>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ExtraSection2;
