import React from "react";
import "./App.css"
import SingleTitle from "./SingleTitle";

class Gallery extends React.Component {    
    constructor() {
        super();
        this.state = { shows: [] };
    }      
    
        componentDidMount() {
            fetch("/rest/showsData")
            .then(response => response.json())
            .then(shows => this.setState({ shows: shows }));
        }
    
  

    
    render() {  
        return (
            <div className="box">{
                this.state.shows.map(show => {
                    return (
                        <SingleTitle  
                            key={show.id} 
                            id={show.id} 
                            title={show.title} 
                            image={show.image} 
                        />
                    );
                })
            }</div>
        );
    }

}


export default Gallery;