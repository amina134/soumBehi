import { useState } from 'react'
import Category from './category'
import Price from './price'
import './sideBar.css'


function Sidebar({adverts}){
    // //type in the search bar 
    // const [query,setQuery]=useState('')
    // const [selectedCategory,setSelectedCategory]=useState('')

    // //handle input change in the search bar
    // const handleInputChange=(event)=>{
    // setQuery(e.target.value)
    // }
    // // mtaa radio button
    // const handleCategoryChange = (event) => {
    //     setSelectedCategory(event.target.value);
    //   };

    // const fiteredItems=adverts.filter((item)=>item.title.tolocaleLowerCase().indexOf(query.toLocaleLowerCase !==-1))
    
    return(
        <>
        <div className='sidebar'>
            <h1 className='sidebar-title'>Filter by</h1>
           <div className='logo-container'>
             <Category/>
             <Price/>
           </div>
        </div>
        </>
    )
}
export default Sidebar