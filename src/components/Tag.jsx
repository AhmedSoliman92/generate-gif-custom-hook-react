import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const apiKey=process.env.REACT_APP_API_KEY;
const Tag= ()=>{
    const [gif, setGif]=useState();
    const [tag, setTag]= useState('basketball')

    const fetchGif= async(tag)=>{
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
        const {data}= await axios.get(url)
        const imgUrl= data.data.images.downsized.url;
        setGif(imgUrl)
    }
    useEffect(()=>{fetchGif(tag);},[tag]);


    const handleClick= ()=>{
        fetchGif(tag)
    }
    return(
        <div className="container">
            <h1>The {tag} Gif</h1>
            <img width="500" height="500" src={gif} alt="Random Gif"/>
            <input placeholder="Enter Gif Name" onChange={(e)=>{setTag(e.target.value)}} />
            <button onClick={handleClick}>Get a Gif</button>
        </div>

    )
}

export default Tag;