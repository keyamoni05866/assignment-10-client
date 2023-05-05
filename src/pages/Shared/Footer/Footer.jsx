import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <Container>
              <div className=" footer pt-3 rounded">
      <div className="container py-2">
          <div className="row">
              <div className="col-md-3 ms-3">
             <h2>Master-chef</h2>
               <p className="text-dark pt-3 text-justify ">The two most common forms of references in master-chef writing are in-text references and footnotes.</p>
              

              </div>
              <div className="col-md-2 text-dark ms-3 mt-2">
                  <h6>Useful Links</h6>
                  <p className='text-dark'>  <Link to="/" className='text-decoration-none text-dark'>Home</Link></p>
                  <p className='text-dark'> <Link to="/blog" className='text-decoration-none text-dark'>Blog</Link></p>
             
              </div>
              <div className="col-md-2 text-dark">
                 <h5>Contact</h5>
                  <p>+88 01950 000 000 <br/>
                    +88 01850 000 000</p>
                  <p>keya05866@gmail.com <br/>keya05866@gmail.com </p>
                  
              </div>
              <div className="col-md-4 text-dark ms-1">
                  <h6 className="fs-1">Subscriber</h6>
                  <p>Subscribe for our latest & Articles. We Won't Give You Spam Mails</p>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="button-login py-2 px-2" >Subscribe</button>
                    </div>
              </div>
          </div>
      </div>
      
  </div>
        </Container>
    );
};

export default Footer;