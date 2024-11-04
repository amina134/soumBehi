import { useEffect, useState } from 'react';
import './searchBar.css';
import { FaSearch } from "react-icons/fa";
const delayExecution = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function SearchBar() {
  const placeholderText = ['cars', 'clothing', 'electronics','furniture'];
  const [state, setState] = useState('');
  const [click, setClick] = useState(false);


  const changePlaceholder = () => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (click) {
        clearInterval(intervalId); 
        return;
      }
      setState(placeholderText[i]);
      i = (i + 1) % placeholderText.length; 
    }, 2000);
  };

 
  function getPlaceholderValue() {
    setClick(true); 
    console.log('The current state is ', state);

  }

  useEffect(() => {
    changePlaceholder(); 
   
  }, []); 

  return (
    <div className='searchBar'>
  <input
    className="search"
    type="text"
    name="search"
    placeholder={state} // Set the placeholder to the current state
  />
  <a className='searchIcon' onClick={getPlaceholderValue}>
    <FaSearch />
  </a>
</div>

  );
}

export default SearchBar;
