import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
    
      <div >
      <h2 className="mt-2 mb-3">
        1. What is the differences between uncontrolled and controlled
        components?
      </h2>
      </div>

      <p className="fs-5">
        <span className="fw-bold text-decoration-underline">Answer:</span>
        <span>
        
          Here's the differences between uncontrolled and controlled components:
        </span>
        <br />
        <span className="fw-bold">Uncontrolled component:</span> In an
        uncontrolled component, the form data is managed by the DOM itself, and
        not by React. The input values are controlled by the user directly and
        React has no knowledge of the current state of the input. In an
        uncontrolled component, we use the 'ref' attribute to get the current
        value of the input, rather than using state. <br />
        <span className="fw-bold">Controlled components:</span>In a controlled
        component, the form data is managed by React itself, through the
        component's state. The input values are set by React and any changes to
        the input are handled by React through handlers. In a controlled
        component, we use the 'value' attribute to set the initial value of the
        input.
      </p>
      <h2 className="mt-2 mb-3">
        2. How to validate React props using PropTypes?
      </h2>
      <p className="fs-5">
        <span className="fw-bold text-decoration-underline">Answer:</span>In
        React, 'PropTypes' is a built-in-library that allows us to validate the
        props being passed to a component. Prop validation is important because
        it helps us to catch errors early on and ensures that the component is
        being used correctly. <br />
        <span>
          Here are some of the common validation rules that we can use with
          'PropTypes':
        </span>
        <br />
        a. 'PropTypes.string' : Validates that the prop is a string. <br />
        b. 'PropTypes.number' : Validates that the prop is a number. <br />
        c. 'PropTypes.bool' : Validates that the prop is a boolean. <br />
        d. 'PropTypes.func' : Validates that the prop is a function. <br />
        e. 'PropTypes.object' : Validates that the prop is a object. <br />
        f. 'PropTypes.array' : Validates that the prop is a array. <br />
        g. 'PropTypes.any' : Validates that the prop can be any data type.{" "}
        <br />
        h. 'PropTypes.oneOfType' : Validate that the prop matches one of the
        specified data types. <br />
      </p>
      <h2 className="mt-2 mb-3">
        3. What is the difference between nodejs and express js?
      </h2>
      <p className="fs-5">
        <span className="fw-bold text-decoration-underline">Answer:</span>{" "}
        Node.js is a JavaScript runtime environment that allows us to run
        JavaScript code outside of the browser, while Express.js is a framework
        for building web applications using Node.js. Node.js provides a core set
        of libraries and APIs that allow us to build server-side applications in
        JS, including the ability to handle incoming requests, manage databases,
        and perform other server-side tasks. Express.js is a lightweight and
        flexible framwork that builds on top of Node.js and provides a set of
        powerful features and utilities for building web applications, including
        routing, middleware.
      </p>
      <h2 className="mt-2 mb-3">
        4. What is a custom hook, and why will you create a custom hook?
      </h2>
      <p className="fs-5">
        <span className="fw-bold text-decoration-underline">Answer:</span> In
        React, a custom hook is a function that starts with the word 'use' and
        allows us to reuse stateful logic across different components. Custom
        hooks are a powerful tool for building reusable and modular code in
        React.
        <br />
        <span>
          Here are some reasons why we might want to create a custom hook:
        </span>
        <br />
        <span className="fw-bold">a. Reusability:</span> If we find ourself
        repeating the same code across multiple components, it's a good sign
        that we could benefit from creating a custom hook. <br />
        <span className="fw-bold">b. Abstraction:</span> Custom hooks can be
        used to abstract away complex or repetitive logic and provide a simpler
        and more intuitive interface to our components. <br />
        <span className="fw-bold">c. Readability:</span> By creating a custom
        hook, we can make our code more readable and easier to understand, since
        we can name the hook after the functionality it provides, and reuse it
        across multiple components.
      </p>
    </Container>
  );
};

export default Blog;
