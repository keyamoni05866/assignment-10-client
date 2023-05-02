import React from "react";

import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Register.css";
const Register = () => {
  return (
    <div className="form-container pb-3">
      <h2 className="form-title"> Please Register!</h2>
      <form>
        <div className="form-controller">
          <label htmlFor="email">Name</label>
          <input type="text" name="name" id="" />
        </div>
        <div className="form-controller">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-controller">
          <label htmlFor="email">Photo Url</label>
          <input type="text" name="photo" id="" />
        </div>
        <div className="form-controller">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="text-secondary fs-5 mt-3">
        <small>
          Already Have an Account?{" "}
          <Link className=" text-danger-emphasis" to="/login">
            Please Login
          </Link>
        </small>
      </p>
      <div className="mt-4 mb-3">
        <button className="btn-Google-register">
          {" "}
          <FaGoogle className="me-2" />
          Sign Up With Google
        </button>
        <button className="btn-Github-register">
          <FaGithub className="me-2"/>Sign Up With Github
        </button>
      </div>
    </div>
  );
};

export default Register;
