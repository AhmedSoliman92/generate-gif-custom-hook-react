import React from 'react';
import useGif from '../useGit';
import { useState } from 'react';

const TagCH=()=>{
    const[tag,setTag]=useState('Volleyball');
    const {gif, fetchGif}=useGif(tag);
    return(
        <div className="container">
            <h1>The {tag} Gif</h1>
            <img width="500" height="500" src={gif} alt="Random Gif"/>
            <input placeholder="Enter Gif Name" onChange={(e)=>{setTag(e.target.value)}} />
            <button onClick={()=>fetchGif(tag)}>Get a Gif</button>
        </div>
    );
}


export default TagCH;