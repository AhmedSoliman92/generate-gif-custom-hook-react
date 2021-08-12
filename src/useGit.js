import axios from 'axios';
import { useState, useEffect } from 'react';


const apiKey=process.env.REACT_APP_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;


const useGif= (tag)=>{
    const [gif, setGif]=useState('');
    const fetchGif= async(tag)=>{
        
        const {data}= await axios.get(tag ? `${url}&tag=${tag}`: url)
        const imgUrl= data.data.images.downsized.url;
        setGif(imgUrl)
    }
    useEffect(()=>{fetchGif(tag);},[tag]);
    
    return {gif,fetchGif}
}

export default useGif;