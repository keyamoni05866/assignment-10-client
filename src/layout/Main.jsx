import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <Container >
           <Header></Header>
            <Footer></Footer>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;