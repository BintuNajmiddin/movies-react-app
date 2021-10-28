
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { MY_API_KEY } from "../global";


const TRENDING_MOVIES_API  = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}`;


// const MovieSlider = ({ moviesArr }) => {
//   return(
//     <Swiper spaceBetween={30} slidesPerView ={5}>
     
//     </Swiper>
//   )
// }

const Home = () => {

      const [moviesList, setMoviesList] = useState([]);

      useEffect(() => {
          fetch(TRENDING_MOVIES_API).then(res => res.json()).then(data =>{
          setMoviesList(data.results);
          })
      }, []);


    return (
      <div className="page-content">
      <Movie moviesList={moviesList}/>
      </div>
    );
  }
  
  export default Home;
  