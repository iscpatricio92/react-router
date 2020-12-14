import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

//const API ='http://localhost:3000/initalState';

const Home = ({myList, trends, originals}) => {
    //const initialState = useInitialState(API);
    //console.log(videos);

    return (
        <>
        <Header/>
            <Search isHome></Search>
            {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {myList.map(item=>
                        <CarouselItem
                        key={item.id}
                        {...item}
                        isList
                        ></CarouselItem>
                    )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item=>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de PLatzi Video">
                <Carousel>
                    {originals.map(item=>
                        <CarouselItem key={item.id} {...item}></CarouselItem>
                    )}
                </Carousel>
            </Categories>
        </>
        );
    }

    const mapStateToProps = state =>{
        return{
            myList: state.myList,
            trends: state.trends,
            originals: state.originals,
        };
    }

//export default Home;
export default connect(mapStateToProps, null)(Home);