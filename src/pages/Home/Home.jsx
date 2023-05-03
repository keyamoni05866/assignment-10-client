import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCards from '../ChefCards/ChefCards';
import './Home.css'
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import { Container } from 'react-bootstrap';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';
const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data =>setChefs(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <h2 className='chef-title'>Here is our Chef's Information</h2>
         <div  className='card-for-chef'>
       
            {
                chefs.map( chef => <ChefCards
                 key={chef.id}
                 chef ={chef}
                ></ChefCards> )
            }
         </div>
          <Container className='mt-5 mb-5'>
          <ExtraSection1></ExtraSection1>
          </Container>
          <Container className='mt-5 mb-5'>
           <ExtraSection2></ExtraSection2>
          </Container>
        </div>
    );
};

export default Home;