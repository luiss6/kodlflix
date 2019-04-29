import React from 'react';
import { Link } from "react-router-dom";
import showsData from "./showsData";

class ShowDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let show = showsData().find(show => showsData.id === movieId);
        let movieId = this.props.match.params.movieId;
            this.setState({
                show: show
        });       
    }



    render() {
        return (
            <div>
                <h1 className="showDetails">{this.state.show.title}</h1>
                <Link to='/'>Go back to the shows Gallery</Link>
            </div>
        );
    }
}






export default ShowDetails;