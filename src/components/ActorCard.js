import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';


const ActorCard = ({name,charName,imgLink}) => {
  return (
    <div className="actor-card">
      <img className="actor__img" src={imgLink} alt="actor image" />
      <div className="actor__info">
      <p className="actor__name">{name}</p>
      <p className="actor__charname">{charName}</p>
      </div>
      </div>
  );
};

export default ActorCard;