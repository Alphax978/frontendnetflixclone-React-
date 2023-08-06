import React, { useState, useEffect } from 'react'
import axios from "./axios"
import requests from './requests'
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]

            );
            // setMovie(request.data.results);
            return request;
            
        }
        fetchData();
    }, []);

    console.log(movie);

  return (
      <header
          className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
              backgroundPosition: "center center",

          }}
      >
          {/* add truncate function */}

          <div className='banner_contents'>
              <h1 className=''>
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className='banner_buttons'>
                  <button className='button'>PLay</button>
                  <button className='button'>My List</button>
                  
              </div>
              
              <h1 className='banner_description'>
                  {movie?.overview}
                  
              </h1>


              

              
          </div>
        <div className='banner_fade'></div>
          

          
          
    </header>
  )
}

export default Banner