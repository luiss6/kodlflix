import React from "react";
import {Link} from "react-router-dom";

function NotFound() {
    return(
        <div>
            <h1>404 Page not found!...</h1>
            <div>Ooops, it looks like this page doesn't exist :(</div>
            <Link to="./"><h3 className="tet">Back to Homepage</h3></Link>
        </div>    
    );
}






export default NotFound;