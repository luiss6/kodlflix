import React from "react";
import { Link } from "react-router-dom";
import "./App.css";


function SingleTitle(props) {
    return (
        <Link to={`/${props.id}`} className="cover">
            <img src={props.image} alt={`${props.title} logo`} />
            <div className="cover-overlay">
                <h1>{props.title}</h1>
            </div>
        </Link>
    );
}


export default SingleTitle;
