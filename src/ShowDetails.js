import React from 'react';
import { Link, Redirect } from "react-router-dom";
import showsData from "./showsData";

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
            <div>
                <h1 className="showDetails">{this.state.show.title}</h1>
                <Link to='/'>Go back to the shows Gallery</Link>
            </div>
        );
        }
    }
}






export default ShowDetails;