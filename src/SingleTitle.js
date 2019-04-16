import React from "react";
import { Link } from "react-router-dom";


function SingleTitle (props) {
    return (
        <div className="singleTitle">

                    <Link to='/details' target='_blank'>
                        <img src={props.image} className="showPicture" alt="cover pic" />
                    </Link>
                    <div className="showTitle overlay">{props.title}</div>
                    
        </div>
    );
}


export default SingleTitle;
