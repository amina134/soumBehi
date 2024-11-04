import React, { useEffect,useState } from "react"
import Advert from './Advert'
import './AdvertCard.css';
import {fetchAdverts,addAdvert} from "../../../api/fetchAdverts"
function AdvertList(){
    const  [adverts,setAdverts]=useState([])
    const [newAdvert,setNewAdvert]=useState({
        title:'',
        type:'',
        price:0,
        description:'',
        city:'',
        delegation:'',
        category:'',
        imageAdvert:[
            {path:''}
        ] 
       
    })

    useEffect(()=>{
        const loadAdverts=async()=>{
            await fetchAdverts()
            .then ((element)=>{
                setAdverts([...element])
                console.log("adverts",adverts)
            })
        }
        loadAdverts()
         console.log("final adverts",adverts)
    },[])


const postAdvert=async()=>{
    await addAdvert(newAdvert)
    .then(()=>{
        setAdverts([...adverts,newAdvert])
         
    })
}
return(
    <div>
        {/* this div is to print the adverts by mapping the array adverts */}
        <div className="advert-container">
            {adverts.map(element=>
                <Advert
               
                {...element}
                />
            )}
        </div>
    </div>
)}
export default AdvertList

