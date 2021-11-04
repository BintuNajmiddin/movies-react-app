import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MY_API_KEY } from "../global";
import styled from "styled-components";
import { ORIGINAL_IMAGE_URL } from "../global";
import ActorCard from "../components/ActorCard";
import Similar from "../components/Similar";

const SINGLE_MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ViewMovie = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [actorsList, setActorInfo] = useState([]);
  const [error, setError] = useState();
  const [similarMovieInfo, setSimilarMovieInfo] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    console.log(id);
    fetch(SINGLE_MOVIE_API + id + API_PARAMS)
      .then((res) => res.json())
      .then((data) => {
        setMovieInfo(data);
      });

    // ACTORS
    fetch(SINGLE_MOVIE_API + id +'/credits'+ API_PARAMS)
      .then((res) => {
        if (!res.ok) {
          throw Error("Serverda ma'lumot olishda xatolik!!");
        }
        return res.json();
      })
      .then((data) => {
        setActorInfo(data.cast);
        console.log(data)
      })
      .catch((err) => {
          console.log(err.message)
          setError(err.message);
        // setIsLoading(false);
      });
    
    // SIMILAR

    fetch(SINGLE_MOVIE_API +id  + '/similar'+  API_PARAMS )
      .then((res) => res.json())
      .then((data) => {
        setSimilarMovieInfo(data.results);
        console.log(data);
      });
  }, []);

  const SingleMoviePage = styled.div`
    padding-top: 100px;
    color: white;
  `;
  const SingleMovieImg = styled.img`
    width: 200px;
    height: 300px;
  `;
   const SingleMoviePageBg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    object-fit: cover;
    object-position: center;
  `;
  const BackDrop = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    height: 560px;
    z-index: -5;
  `;
  const ActorCardBox = styled.div`
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap
  `;


    const mappedActors = actorsList.map((actor,index) => (
        <ActorCard
          key={index}
          id={actor.id}
          name={actor.original_name}
          imgLink={IMAGE_URL + actor.profile_path}
          charName = {actor.character}
        />
    ));

    const mappedSim = similarMovieInfo.map((actor, index) => (
        <Similar
          similar={actor}
          key={index}
        />
    ))
    


  return (
    <SingleMoviePage className="singleMoviepage">
      <BackDrop
        className="inner-div" style={{ backgroundImage: `url(${ ORIGINAL_IMAGE_URL + movieInfo.backdrop_path })`}}
      >
        <div className="movie-info">
          <SingleMovieImg src={IMAGE_URL + movieInfo.poster_path} alt="" />
          <div className="movie-info">
            <h2> {movieInfo.title}</h2>
            <p>{movieInfo.release_date}</p>

            <span className="movie_genres">
              {movieInfo.hasOwnProperty("genres")
                ? movieInfo.genres.map((genre, index) => (
                    <span key={index}> {genre.name} </span>
                  ))
                : null}
            </span>
            <small>Dot</small>

            {/* PROGRESS BAR */}
            <div className="progress-container">
              <div className="progress">
                <span
                  className="title timer"
                  data-from="0"
                  data-to={movieInfo.vote_average}
                  data-speed="1500"
                >
                  {movieInfo.vote_average * 10}%
                </span>
                <div className="overlay"></div>
                <div className="left"></div>
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>
      </BackDrop>

        <ActorCardBox >
      <h2 className="actor-title">Actors</h2>
      <h2 className="actor-title">Cast</h2>
       {mappedActors }
        </ActorCardBox>

      <h2 className="actor-title">Similar Movies</h2>
      <div className="similar">
        { mappedSim }
      </div>

    </SingleMoviePage>
  );
};

export default ViewMovie;
