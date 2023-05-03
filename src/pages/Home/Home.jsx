import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCards from '../ChefCards/ChefCards';
import './Home.css'
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

        </div>
    );
};

export default Home;