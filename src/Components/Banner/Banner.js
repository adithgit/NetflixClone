import React,{useEffect} from 'react'
import { useState } from 'react'
import { API_KEY , IMAGE_URL} from '../constants/constants'
import axios from './../Axios/Axios'
import './Banner.css'
function Banner() {

    const [movie,setMovie] = useState({}); 
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)]);   
            console.log(Math.random()*20);
        })
    }, [])
    return (
        <div  style = {{ backgroundImage: `url(${movie ? IMAGE_URL+movie.backdrop_path : '' })`}}
        className="Banner">
            <div className="content">
                <h1 className="title">{ movie? movie.title : " " }</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{ movie? movie.overview : " " }</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
