import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css';

function Banner({fetchUrl}) {
    const [movies,setMovies] = useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData = async()=>{
      const {data} = await instance.get(fetchUrl)
      // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movies);
  
     
    useEffect(()=>{
      fetchData()
  
    },[])
  return (
    <div style={{
      height:'650px',
      backgroundImage:`url(${base_url}/${movies?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}>
      <div className="banner-content">
        <h1>{movies?.name}</h1>
        <h2>{movies?.overview?.slice(0,200)}...</h2>
      </div>
    </div>
  )
}

export default Banner