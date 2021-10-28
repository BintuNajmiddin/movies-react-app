import { useEffect, useState } from "react/cjs/react.development";
import { MY_API_KEY } from "../global";
import { useParams } from "react-router-dom";

const SINGLE_MOVIE_API = `https://api.themoviedb.org/3/movie/`;
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`

const ViewMovie = () => {

    const [movieInfo, setMovieInfo] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fetch(SINGLE_MOVIE_API + id + API_PARAMS).then( res => res.json()).then( data =>{
            setMovieInfo(data);
        })
    }, []);

    return (
        <h2>view movie page : {movieInfo.title}</h2>
    );
}

export default ViewMovie;
