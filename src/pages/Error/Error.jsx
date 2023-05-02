import React from "react";
import { Link } from "react-router-dom";
import errorImage from '../../assets/error.jfif'
import './Error.css'
import { Button } from "react-bootstrap";
const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-3">
     
       
     
      <div>
        <img src={errorImage} alt="" className="error-image"/>
        <h1 className="fs-1 text-center">404</h1>
        <p className="fs-1 text-center">Ooooppsss !!</p>
        <h1 className=" ">
          You are in the wrong page
        </h1>
        {/* <Button className="button-login py-2 px-4 text-decoration-none">  <Link to="/"> Go Home</Link></Button> */}
      
      <Link to="/login"><Button className="button-login py-2 px-4 error-btn">Go Back Home</Button></Link>

      </div>
    </div>
  );
};

export default Error;
