import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Register.css";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, googleProvider, userProfileUpdate, githubProvider } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
    }
   
   
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");

        userProfileUpdate(createdUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => console.error(error));

        form.reset();
      })

      .catch((error) => console.error(error));
  };

  const signUpWithGoogle = () => {
    googleProvider()
      .then((result) => {
        const getUser = result.user;
        console.log(getUser);
      })
      .catch((error) => console.error(error));
  };

  const signUpWithGithub = () => {
    githubProvider()
      .then((result) => {
        const getGithubUser = result.user;
        console.log(getGithubUser);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container pb-3">
      <h2 className="form-title"> Please Register!</h2>
      <form onSubmit={handleRegister}>
        <div className="form-controller">
          <label htmlFor="email">Name</label>
          <input type="text" name="name" id="" />
        </div>
        <div className="form-controller">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-controller">
          <label htmlFor="photo">Photo Url</label>
          <input type="text" name="photo" id="" />
        </div>
        <div className="form-controller">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
          <p className="text-danger">{error}</p>
        </div>
        <input className="btn-submit" type="submit" value="Register" />
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
        <button className="btn-Google-register" onClick={signUpWithGoogle}>
          <FaGoogle className="me-2" />
          Sign Up With Google
        </button>
        <button onClick={signUpWithGithub} className="btn-Github-register">
          <FaGithub className="me-2" />
          Sign Up With Github
        </button>
      </div>
    </div>
  );
};

export default Register;
