import React from 'react';
import { Link } from "react-router-dom";

function ShowDetails() {
    return (
        <div>
            <h1 className="showDetails">Hello, this will be the details page for each Movie & TV show :) </h1>
            <Link to='/'>Go back to the shows Gallery</Link>
        </div>
    )
}






export default ShowDetails;