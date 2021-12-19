import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from './Heading';
import MainLogin from './MainLogin';
import MidContent from './MidContent';
import Footer from './Footer';


const  MainLHome = () => {

  return (
    <>
        <Heading/>
        <MainLogin/>
        <MidContent/>
        <Footer/>
    </>
  );
}

export default MainLHome;
