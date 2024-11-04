import axios from 'axios'
// this function to fetch adverts from the database
const fetchAdverts=async()=>{
    try {
       const response =await axios.get('http://localhost:2000/advert/allAdverts')
       
       const fetchData=response.data

       const array=[]
       for (let i in fetchData){
          array.push(fetchData[i])
       }
       const result=[...array]
       console.log("result is ",result)
       return result
    } catch (error) {
       console.error(error)
    }
}


// this function is to add an advert 
const addAdvert=async(nouveau)=>{
     try {   
        const response=await axios.post('http://localhost:5000/advert/addAdvert')
        return response.data.json
     } catch (error) {
      console.error(error)
     }
}
export {fetchAdverts,addAdvert}