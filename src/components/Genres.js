import React from 'react';
import { useEffect, useState } from 'react';
import { MY_API_KEY } from '../global';
import { NavLink } from 'react-router-dom';

const Genres = () => {
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setGenresList(data.genres);
            console.log(data)
        });
    }, []);
    const newArr = genresList.map(el => <div className="movie-title" key={el.id}>
        <NavLink activeClassName="active" to={`/catalog/${el.id}`}>{el.name}</NavLink>
    </div>)
    return (
        <div className="aside">  
            {newArr}
        </div>
    )
}

export default Genres
