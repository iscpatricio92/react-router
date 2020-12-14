import React from 'react'
import { connect } from 'react-redux';
import PropTypes from  'prop-types';
import { Link } from  'react-router-dom';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarouselItem.scss'
import playIco from '../assets/static/play.png'
import masIco from '../assets/static/más.png'
import deleteIcon from '../assets/static/delete.png'
//import fotoWoman from '../assets/static/Img-01.jpg'


const CarouselItem = (props) => {
    const {id, cover, title, year, contentRating, duration, isList} = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return(
        <div className="corousel-item">
            <img className="corousel-item__img" src={cover} alt={title} />
            <div className="corousel-item__details">
                <div>
                <Link to={`/player/${id}`}>
                    <img
                        src={playIco}
                        alt="PLay"
                    />
                </Link>
                    {isList ?
                        <img
                            src={deleteIcon}
                            alt="delete"
                            onClick={()=>handleDeleteFavorite(id)}
                        /> :
                            <img
                                src={masIco}
                                alt="Mas"
                                onClick={handleSetFavorite}
                            />
                    }
                    <p  className="carousel-item__details--title">{title}</p>
                    <p  className="carousel-item__details--subtitle"> {`${year} ${contentRating} ${duration}`} </p>
                </div>
            </div>
        </div>
    );
}

CarouselItem.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

//export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);