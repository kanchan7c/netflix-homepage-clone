const APIKEY = 'd7f1efd916a1d2299d6f68991c5c482f';

// Genre URL : /genre/movie/list?api_key=d7f1efd916a1d2299d6f68991c5c482f&language=en-US

const requests = {
    trendingMovies : `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    originals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;