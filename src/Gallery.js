import React from "react";
import "./App.css"
import SingleTitle from "./SingleTitle";
import showsData from "./showsData";
import { BrowserRouter as Router } from 'react-router-dom';
import ShowDetails from "./ShowDetails";


function Gallery() {

    const showsComponent = showsData.map(show => {
        return <SingleTitle image={show.image} title={show.title} id={show.id} />;
    })
    

    return (
        <div className="box">
            {showsComponent}
        </div>
    )
}


export default Gallery;