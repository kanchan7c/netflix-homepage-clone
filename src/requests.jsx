const APIKEY = 'd7f1efd916a1d2299d6f68991c5c482f';

// Genre URL : /genre/movie/list?api_key=d7f1efd916a1d2299d6f68991c5c482f&language=en-US

const requests = {
    trendingMovies : `/trending/all/day?api_key=${APIKEY}`,
    originals: `/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    topRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    actionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
}

export default requests;