import { Link } from "react-router-dom";
import styled from 'styled-components';



const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MoviesCard = styled.div`
  // min-width:160px;
  padding-top: 40px;
  margin-bottom: 10px;
  margin-right:10px;
  flex-wrap: wrap;
`;
const MoviesImg = styled.img`
  display:block;
  // width: 180px;
  // height: 225px;
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  height: 60%;
`;
const MovieTitle = styled.h2`
    color: #000;
    font-weight: 600;
    font-size: 1em;
    margin: 0;
    // width: 100%;
    // overflow-wrap: break-word;
`;
const ReleaseDate = styled.p`
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.6);
`;

const Movie = ({ movieobj }) => {
  return (
    <Link to={`/movie/${movieobj.id}`} style={{textDecoration:'none'}}>
      <MoviesCard className="movie">
          {/* <div className='moviesCardImgWrapper125'>
            
  
          </div> */}
          <MoviesImg src={IMAGE_URL + movieobj.poster_path} alt={movieobj.title}/>
          <div className="movie_details">
          <MovieTitle > {movieobj.title ? movieobj.title : movieobj.name} </MovieTitle>
          <ReleaseDate className="release-date">{movieobj.release_date}</ReleaseDate>
      </div>
      </MoviesCard>
     
     </Link>
  );
};
export default Movie;