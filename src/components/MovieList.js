import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';


const MovieList = () =>{
    return(
        <div className="container">
            <h2>Top Movies</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination = {{clickable:true}}
                scrollbar ={{draggable:true}}
                spaceBetween = {50}
                slidesPerView = {5}
                >
                     { moviesArr.map(el =>(<SwiperSlide><Movie movieObj={el} key = {el.id}/></SwiperSlide>))};
            </Swiper>
        </div>
    );
}

export default MovieList;