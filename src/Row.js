import react,{ useState, useEffect} from "react"
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
 
const base = "https://image.tmdb.org/t/p/original/";



//we could pass props also as (props) and call as props.title in parent object
// but why seek long code when u have movie short one
function Row({title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    },[fetchUrl]);

    // console.log(movies)
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autolay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
      .catch(error => console.log(error))
    }

  }
    

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* row posters */}
      <div className="row_posters">
          {movies.map(movie => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name} /> 
          ))}        
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
       

    </div>

  );
}

export default Row;
