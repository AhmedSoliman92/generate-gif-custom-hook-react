import React from "react";
import RandomCH from "./components/RandomCH";
import TagCH from "./components/TagCH";
import './App.css' ;
const App=()=> (
    <>
        <h1>Random Gif App</h1>
        <div className="main-container">
            <TagCH/>
            <RandomCH/>
        </div>
    </>
)

export default App;