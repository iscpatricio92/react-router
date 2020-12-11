import React from 'react'
import PropTypes from  'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import playIco from '../assets/static/play.png'
import masIco from '../assets/static/más.png'
import fotoWoman from '../assets/static/Img-01.jpg'


const CarouselItem = ({ cover, title, year, contentRating, duration}) => (
    <div className="corousel-item">
        <img className="corousel-item__img" src={cover} alt={title} />
        <div className="corousel-item__details">
            <div>
                <img src={playIco} alt="PLay" />
                <img src={masIco}  alt="Mas" />

                <p  className="carousel-item__details--title">{title}</p>
                <p  className="carousel-item__details--subtitle"> {`${year} ${contentRating} ${duration}`} </p>
            </div>
        </div>
    </div>
);

CarouselItem.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarouselItem;