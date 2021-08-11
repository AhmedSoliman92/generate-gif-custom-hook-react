import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";
import './App.css' ;
const App=()=> (
    <>
        <h1>Random Gif App</h1>
        <div className="main-container">
            <Tag/>
            <Random/>
        </div>
    </>
)

export default App;