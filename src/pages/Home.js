import { useState, useEffect } from "react";
import { MY_API_KEY } from "../global";
import Intro from "../components/Intro";
import MovieList from '../components/MovieList';
import Slider from '../components/Slider';

// const TRENDING_MOVIES_API  = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}`;

const Loader = () => {
  return (
    <div className="loader" id="loader-2">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const Home = () => {
  // const [movieList, setMoviesList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();



// useEffect(() => {
//   setTimeout(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY}` )
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Serverda ma'lumot olishda xatolik!!");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setMoviesList(data.results);
//         setIsLoading(false);
//         console.log(data.results);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err.message);
//       });
//   }, 4000);
// }, []);

return (
  <div className="wrapper">
    <Intro />

    <Slider />

    {/* {isLoading && !error ? <Loader /> : } */}
      <div>
      <MovieList type='upcoming' title ='Upcoming Movies'/>
      <MovieList type='top_rated' title ='Top Movies'/>
      <MovieList type='popular' title ='Popular Movies'/>
      </div>
   

   

  </div>
);
}
  
export default Home;
  