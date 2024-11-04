import React, { useState } from 'react';
import './category.css'
const Category = () => {
  

  return (
    <div className="category-filter">
     
       <h4 className='category-title'>category</h4>
      <label className='label-searchBar'>
        <input 
          type="radio"
          name="category"
          value="cars"
        
        />
        cars
      </label>

      <label className='label-searchBar'>
        <input
          type="radio"
          name="category"
          value="furniture"
         
        />
        furniture
      </label>

      <label className='label-searchBar'>
        <input
          type="radio"
          name="category"
          value="electronics"
        
        />
        electronics
      </label>

      <label className='label-searchBar'>
        <input
          type="radio"
          name="category"
          value="clothing"
         
        />
        clothing
      </label>

     
    </div>
  );
};

export default Category;
