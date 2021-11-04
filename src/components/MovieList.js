import React, { useState, useEffect } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import Movie from './Movie';
import SwiperCore, { Autoplay } from "swiper"; //auto swiper chiqarish uchun
import {MY_API_KEY} from '../global';
import { Link } from "react-router-dom";


const MovieList = ({type, title}) =>{
    SwiperCore.use([Autoplay]); // Auto swiper chiqarish uchun

const [moviesList, setMoviesList]  = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState();

  const Loader = () => {
    return (
      <div className="loader" id="loader-2">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };


  useEffect(() => {
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${MY_API_KEY} `)
        .then((res) => {
          if (!res.ok) {
            throw Error("Serverda ma'lumot olishda xatolik!!");
          }
          return res.json();
        })
        .then((data) => {
          setMoviesList(data.results);
          setIsLoading(false);
          console.log(data.results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 4000);
  }, []);









return (
    <div className="movieContainer">
      <div className="heading-line">
        <h2 className="heading">{title}</h2>
        <Link className="all-movies-button" to="/catalog">All </Link>
      </div>

      <Swiper
        modules={[Autoplay]} grabCursor={true} spaceBetween={0}slidesPerView={6}loop
        autoplay={{ delay: 2000, disableOnInteraction: false }} >
        {moviesList.map((el) => (
          <SwiperSlide>
            <Movie className="movies-wrapper" movieobj={el} key={el.id} />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
);
};

export default MovieList;