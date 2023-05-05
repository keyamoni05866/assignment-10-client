import React from "react";
import "./ExtraSection1.css";
import { Button, Container } from "react-bootstrap";
import aboutImg from "../../assets/th.jfif";
const ExtraSection1 = () => {
  return (
    <Container className="about-section">
      <h2 className="chef-title mb-5 text-decoration-underline">About Us</h2>
      <div className="about-content">
        <div className="about-title">
          <p>
            Chefs are culinary professionals who are trained in the art of
            cooking and food preparation. They work in a variety of settings,
            including restaurants, hotels, catering companies, and private
            homes. Chefs are responsible for creating menus, preparing meals,
            supervising kitchen staff, and ensuring that all food is cooked to
            perfection.Chefs come in a variety of specialties, from pastry chefs
            who specialize in creating delicious desserts to executive chefs who
            oversee the operations of an entire kitchen. Some chefs work in
            specific types of cuisine, such as Italian or French, while others
            are trained in a variety of international cuisines.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="" className="rounded ps-4 img-fluid" />
        </div>
        
      
      </div>
    </Container>
  );
};

export default ExtraSection1;
