import "./header.css"
import SearchBar from "./searchBar"
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
function Header(){





return(<div class="header">
    <nav class="nav">
        <div>
          <img class="logo" src="./logo.png"/>
        </div>
        <ul class="nav-bar">
            <li><a href="#home">Home</a></li>
            <li><a href="#buy">Products</a></li>
            <li><a  href="#postProduct"><button className="postAnAdvert"><FaPlus className="faPlus"/>Post an Advert</button></a></li>
            <SearchBar/>
            <li><a href="#likes"></a> <FaRegHeart/></li><br/>
            <li><a href="#cart"></a> <IoCart/></li>
            <li><a href="#contact"></a> <IoIosContact/></li>

          
          
        </ul>
    </nav>
    </div>)
}

export default Header