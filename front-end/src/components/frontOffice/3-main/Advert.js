import React from 'react';
import './AdvertCard.css';
import { Link } from 'react-router-dom';
function Advert({id, title, type, price, description, city, delegation, category, imageAdvert }) {
    console.log('path',imageAdvert[0].path)
    return (

        <div className="advert-card">
            <div className="card-image">
                <img src={`http://localhost:3000/${imageAdvert[0].path}`} alt={title} />
            </div>
            <div className="card-body">
                <h2 className="advert-title">{title}</h2>
                <p className="advert-type">{type}</p>
                <p className="advert-price">Price: dt{price}</p>
                <p className="advert-description">{description}</p>
                <p className="advert-location">{city}, {delegation}</p>
                <p className="advert-category">Category: {category}</p>
                <Link to={`/AdvertInformation/${id}`}><img src={`http://localhost:3000/${imageAdvert[0].path}`}/></Link>
            </div>
            
        </div>
    );
}



Advert.defaultProps = {

    title:'xxxxxxx',
        type:'xxxxxxxx',
        price:0,
        description:'xxxxxxxxx',
        city:'xxxxxx',
        delegation:'xxxxxxxx',
        category:'xxxxxxxx',
        imageAdvert:[
            {path:'xxxxxxxx'}
        ]
    
}

export default Advert