import React from 'react';
import { Link, Redirect } from "react-router-dom";
import showsData from "../showsData";
import "./ShowDetails.css";

class ShowDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;       
        let show = showsData().find(show => show.id === movieId);        
        this.setState({ show });       
    }



    render() {
        let show = this.state.show;
        if (show === undefined) {
            return <Redirect to="/not-found" />
        } else {
        return (
            <div className="ShowDetails">
                <h1>{show.title}</h1>
                <div className="container">
                    <div className="text">
                        <p>{show.synopsis}</p>
                    </div>
                    <img className="image" src={show.image} alt={show.name}/>                  
                </div>
                <Link to='/'>Go back to the shows Gallery</Link>
            </div>
        );
        }
    }
}






export default ShowDetails;