import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url_poster = "https://image.tmdb.org/t/p/original";

const Row = ({title, fetchURL}) => {
    const [getMovies, setMovies] = useState([]);

    //pulling info when the row component loads
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            // console.log(request)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    return (
        <div className="row">
            {/* title of the row  */}
            <h1>{title}</h1>
            {/* rendering the poster banner dynamically  */}
            <div className="row_posters">
            {getMovies.length !==0? getMovies.map((movie, index) => 
                <img key={index} src={`${base_url_poster}${movie.poster_path}`} alt={movie.name||movie.original_title} /> 
            ):''}

            </div>
        </div>
    )
}

export default Row;
