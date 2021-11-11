import React,{useState,useEffect} from 'react'
import axios  from './../Axios/Axios'; 
import './RowPost.css'
import {IMAGE_URL,API_KEY} from './../constants/constants'  
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function RowPost(props) {

    var settings = {
        className:"center",
        centerPadding:"10px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    const [post,setPost] = useState([]);
    const [urlId,setId] = useState('');

    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            setPost(res.data.results);
        }).catch((err)=>{
            alert("Network Error")
        })   
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        },
      };

      const getVideo = (videoId) => {
          console.log(videoId);
          axios.get(`/movie/${videoId}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
              res.data.results[0] ? setId(res.data.results[0].key) : setId('');
          })
      }
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">
                <Slider {...settings} >
                {
                    post.map( obj =>{
                        return<img onClick={ ()=> getVideo(obj.id)}  className={ props.isSmall ? "smallPoster" :"poster"} src={`${IMAGE_URL+obj.backdrop_path}`} alt="poster" />
    
                    })
                }
                </Slider>
            </div>
            { urlId && <YouTube videoId={urlId} opts={opts} />}
        </div>
    )
}

export default RowPost
