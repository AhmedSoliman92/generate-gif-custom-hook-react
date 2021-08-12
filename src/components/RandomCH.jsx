import React from 'react';
import useGif from '../useGit';

const RandomCH=()=>{
    const {gif, fetchGif}=useGif();
    return(
        <div className="container">
            <h1>Random</h1>
            <img width="500" height="500" src={gif} alt="Random Gif"/>
            <button onClick={fetchGif}>Get New Gif</button>
        </div>

    );
}


export default RandomCH;