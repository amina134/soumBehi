import logo from './logo.svg';
import './App.css';
import './styles.css'
import React, { useState } from 'react';
import AdvertList from './components/frontOffice/3-main/advertList';
import Header from './components/frontOffice/1-header/header';

import Sidebar from './components/frontOffice/2-hero/filterSection/sideBar';
import { Route, Routes } from 'react-router-dom';
import AdvertInformation from './components/frontOffice/3-main/advertInformation'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/fontawesome.min.css" integrity="sha512-B46MVOJpI6RBsdcU307elYeStF2JKT87SsHZfRSkjVi4/iZ3912zXi45X5/CBr/GbCyLx6M1GQtTKYRd52Jxgw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function App() {
  
  return (
   <div>

    <Header/>
    <div className='sidebar-plus-products'>
    <Sidebar/>
    <AdvertList/>
    </div>
    <Routes>
      <Route path="/" element={<AdvertList setAdverts={setAdverts} /> }></Route>
      <Route path="/AdvertInformation/:id" element={<AdvertInformation adverts={adverts}/>} ></Route>
    </Routes>
   
   </div>

  );
}

export default App;
