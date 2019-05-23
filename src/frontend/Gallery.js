import React from "react";
import "./App.css"
import SingleTitle from "./SingleTitle";
import showsData from "./showsData";



function Gallery() {
    
        fetch('/rest/showsData')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
        });


    

    const showsComponent = showsData().map(show => {
        return <SingleTitle  key={show.id} id={show.id} title={show.title} image={show.image} synopsis={show.synopsis}/>;
    })
    
    // render() {
        return (
            <div className="box">{
                showsData().map(show => {
                    return (
                        <SingleTitle  key={show.id} id={show.id} 
                        title={show.title} image={show.image} 
                        synopsis={show.synopsis}/>
                    );
                })
            }</div>
        );
    // }
}


export default Gallery;