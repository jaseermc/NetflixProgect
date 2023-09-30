import React, { useEffect,useState } from 'react'
import {API_KEY,baseUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  // const imageUrl='https://image.tmdb.org/t/p/original/'
  // const [movie,setMovie]=useState([])
  // const getMovie=()=>{
  //   fetch("https://apitrending/movie/week?api_key=ca50978885711a3152548daf3baac8fc.themoviedb.org/3/")
   
  //   .then(res=> res.json())
  //   .then(json =>setMovie(json.results[0]) )
  // }
  // useEffect(()=>{
  //   getMovie()
  },[]) 

 
    

    
  return (
    
    <div
    style={{backgroundImage:`url(${movie ?baseUrl+ movie.backdrop_path :""})`}} 
    className='banner'>
        <div className="content ">
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview:""} </h1>
        </div>  
        <div className="fade_bottom"></div>
        {/* {movieList.map((movie)=>{
            <img style={{width:"300px",height:"250px",marginLeft:"10px",marginTop:"10px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          })} */}
    </div>
  )
}

export default Banner