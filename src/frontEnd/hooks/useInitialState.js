import {useEffect, useState} from 'react';

    //const [videos , setVideos] = useState([]); Ya no se utiliza
    /* //Esta parte se deja en este lado para ver lo que teniamos en la App
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    useEffect (()=>{
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    */

    const useInitialState = (API) => {
        const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
        useEffect (()=>{
            fetch(API)
                .then(response => response.json())
                .then(data => setVideos(data));
        }, []);
        return videos;
    }

export default useInitialState;