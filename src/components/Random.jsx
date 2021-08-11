import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const apiKey=process.env.REACT_APP_API_KEY;
const Random= ()=>{
    const [gif, setGif]=useState('')

    const fetchGif= async()=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
        const {data}= await axios.get(url)
        const imgUrl= data.data.images.downsized.url
        setGif(imgUrl)
    }
    useEffect(()=>{fetchGif();},[]);


    const handleClick= ()=>{
        fetchGif()
    }
    return(
        <div className="container">
            <h1>Random</h1>
            <img width="500" height="500" src={gif} alt="Random Gif"/>
            <button onClick={handleClick}>Get New Gif</button>
        </div>

    )
}
export default Random;