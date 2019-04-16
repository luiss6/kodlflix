import React from "react";
import { Link } from "react-router-dom";


function SingleTitle(props) {
    return (
        <Link to={`/${props.id}`} target='_blank' className="singleTitle">
            <img src={props.image} className="showPicture" alt={`${props.title} logo`} />
            <div className="showTitle overlay">{props.title}</div>
        </Link>
    );
}


export default SingleTitle;
