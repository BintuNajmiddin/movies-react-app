import React, { useState } from 'react';
import { useEffect } from 'react';
import { MY_API_KEY } from '../global';
import { ORIGINAL_IMAGE_URL } from '../global';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import { W500IMAGE } from '../global';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Slider = () => {

    const [sliderMovies, setSliderMovies] = useState([]);
    const [error, setError] = useState();
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MY_API_KEY} `)
        .then(res => {
            if (!res.ok) {
                throw Error("Serverda ma'lumot olishda xatolik!!");
            }
            return res.json()
        })
        .then(data =>{
            setSliderMovies(data.results.slice(0, 4));
            console.log(data.results.slice(0,4));
        })
        .catch((err) => {
            setError(err.message)
        });
    }, []);


  //   const BackDrop = styled.div`
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   height: 560px;
  //   z-index: -5;
  // `;
  const BackDrop = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 560px;
  z-index: -5;
`;
  const SingleMovieImg = styled.img`
    width: 200px;
    height: 300px;
  `;

  const SingleMoviePage = styled.div`
    // padding-top: 100px;
    color: white;
  `;
    return (
        <div>
          {sliderMovies.length > 0 ?
          <Swiper 
          spaceBetween = {0}
          slidesPerView={1}
          modules={[Autoplay]}
          grabCursor={true}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          >
          {sliderMovies.map( el => (<SwiperSlide key={el.id}>
            <Link to={`/movie/${el.id}`}>

<SingleMoviePage className="singleMoviepage">
    <BackDrop className="inner-div" style={{ backgroundImage: `url(${ ORIGINAL_IMAGE_URL + el.backdrop_path })`}}>
      <div className="movie-info">
        <SingleMovieImg src={IMAGE_URL + el.poster_path} alt="" />
          <div className="small-movie-info">
            <h2> {el.title}</h2>
            <p>{el.overview}</p>

            <span className="movie_genres">
                {el.hasOwnProperty("genres") ? el.genres.map((genre, index) => (
                <span key={index}> {genre.name} </span>)) : null}
            </span>

            <div className="progress-container">
              <div className="progress">
                <span className="title timer" data-to={el.vote_average}>
                  {el.vote_average * 10}%
                </span>
                <div className="overlay"></div>
                <div className="left"></div>
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>
      </BackDrop>
      </SingleMoviePage>
            </Link>
         {/* padding-top , color white */}
    </SwiperSlide>))}
  </Swiper> : '' } 
</div>
    )
}


export default Slider;