import React from 'react';
import { Link } from "react-router-dom";

class ShowDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Hello, this will be the details page for each Movie & TV show :)"
        }
    }

    componentDidMount() {
        setTimeout(() => {
           this.setState({
                message: "Coming soon! :)"
            });
        }, 3000);
    }



    render(){
           return(
            <div>
                <h1 className="showDetails">{this.state.message}</h1>
                <h1></h1>
                <Link to='/'>Go back to the shows Gallery</Link>
            </div>
        );
    }
}






export default ShowDetails;