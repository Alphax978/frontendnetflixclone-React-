const API_KEY = "83575efccf3094f05a2a4272db01b8ef";//this is an api key which we will use to extract all the movies information

// object creation


const requests  ={
    // object for storing api end points
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with-networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
    
}

export default requests;