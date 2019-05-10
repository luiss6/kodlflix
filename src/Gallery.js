import React from "react";
import "./App.css"
import SingleTitle from "./SingleTitle";
import showsData from "./showsData";



function Gallery() {

    const showsComponent = showsData().map(show => {
        return <SingleTitle  key={show.id} id={show.id} title={show.title} image={show.image} synopsis={show.synopsis}/>;
    })
    

    return (
        <div className="box">
            {showsComponent}
        </div>
    )
}


export default Gallery;