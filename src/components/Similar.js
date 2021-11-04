import React from 'react'
import { W500IMAGE } from '../global';
import { Link } from 'react-router-dom';

const Similar = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
        <div className="similar-card">
              <div className="">
             <img className="similar-card__img" src={W500IMAGE + props.similar.poster_path}/>
             <p className="movie-title">{props.similar.title}</p>
      </div>
        </div>
        </Link>
    )
}

export default Similar
