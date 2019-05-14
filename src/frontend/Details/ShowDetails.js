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
        if (this.state.show === undefined) {
            return <Redirect to="/not-found" />
        } else {
        return (
            <div className="ShowDetails">
                <h1>{this.state.show.title}</h1>
                <div className="container">
                    <div className="text">
                        <p>{this.state.show.synopsis}</p>
                    </div>
                    <img className="image" src={this.state.show.image} alt={this.state.show.name}/>                  
                </div>
                <Link to='/'>Go back to the shows Gallery</Link>
            </div>
        );
        }
    }
}






export default ShowDetails;