import React from "react";



function SingleTitle (props) {
    return (
        <div className="singleTitle">
                    <img src={props.image} className="showPicture" alt="cover pic" />
                    <div className="showTitle overlay">{props.title}</div>
        </div>
    );
}


export default SingleTitle;
