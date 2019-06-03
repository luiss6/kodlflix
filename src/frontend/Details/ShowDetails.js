import React from 'react';
import { Link, Redirect } from "react-router-dom";
import "./ShowDetails.css";

class ShowDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        fetch('/rest/showsData')
        .then(response => response.json())
        .then(showsData => {
            let movieId = this.props.match.params.movieId; 
            let show = showsData.find(show => show.id === movieId);
            this.setState({ show: show });
        });
    }

    render() {
        let show = this.state.show;
        if (show) {                 
            return (
                show.id ? 
                    <div className="show-details">
                        <h1 className="details-title">
                            {show.title}
                        </h1>
                        <div className="container">
                            <div className="details-synopsis">
                                <p>{show.synopsis}</p>                           
                            </div>
                            <img 
                                src={require(`../common/images/${show.id}.jpg`)}
                                alt={`${show.title} logo`} 
                            />                                  
                        </div>
                        <div className="details-link">
                            <Link to='/'>Go back to the shows Gallery</Link>
                        </div>
                    </div> :
                    <div></div>
            );
        } else {
            return <Redirect to="/not-found" />
        }
        
    }
}

export default ShowDetails;