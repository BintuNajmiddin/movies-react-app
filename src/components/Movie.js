import { Link } from "react-router-dom";
import styled from 'styled-components'
import { MY_API_KEY } from "../global";



const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}`;
const POPULAR_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY}`;
const UPCOMING_MOVIES_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${MY_API_KEY}`;
const TOP_MOVIES_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MY_API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false`;

const IMAGE_URL ='https://image.tmdb.org/t/p/w500';


const MoviePoster = styled.img`
border-radius: 15px;
width: 100%;
`;

const MovieCard = styled.div`
background-color: black;
`


const Movie = ({moviesList}) =>{
    const url = `/movie/${moviesList.id}`;
    return (
        <MovieCard>
        <MoviePoster src={IMAGE_URL + moviesList.poster_path} alt={moviesList.title}/>
        {/* <img className="movie__img" src={IMAGE_URL + movieObj.poster_path} alt={movieObj.title}/> */}
        {moviesList.title ? moviesList.title  : moviesList.name}
        <Link to={url}>View this movie</Link>
        </MovieCard>

    );
}
export default Movie;