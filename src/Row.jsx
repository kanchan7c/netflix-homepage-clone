import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Row = ({title, fetchURL}) => {
    const [getMovies, setMovies] = useState([]);

    //pulling info when the row component loads
    useEffect(() => {

    }, []);


    return (
        <div>
            <h1>{title}</h1>

            {/* container containing posters  */}
        </div>
    )
}

export default Row;
