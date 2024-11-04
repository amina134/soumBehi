import { useParams } from "react-router-dom"



const AdvertInformation=({adverts})=>{
    const {id}=useParams()
    const advertObject=adverts.find((el)=>el.id===id)
    console.log('advertObject',advertObject)
    return(
        <>
            <div>
                <h2>{advertObject.title}</h2>
                <p>{advertObject.description}</p>
                <p>Price: dt{advertObject.price}</p>
                <img src={`http://localhost:3000/${advertObject.imageAdvert[0].path}`} alt={advertObject.title} />
            </div>
        </>
    )
}
export default AdvertInformation