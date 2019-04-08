import React from "react";
import img1 from "./Series/img1.jpg";
import img2 from "./Series/img2.jpg";
import img3 from "./Series/img3.jpg";
import img4 from "./Series/img4.jpg";
import img5 from "./Series/img5.jpg";
import img6 from "./Series/img6.jpg";

function TVseries() {
    return(
        <div className="series">
            <div className="container">
                <div>
                    <img src={img1} className="item" alt="cover pic"></img>
                </div> 
                <div>  
                    <img src={img2} className="item" alt="cover pic"></img>
                </div>
                <div> 
                    <img src={img3} className="item" alt="cover pic"></img>
                </div>   
            </div>           
            <div className="container">
                <div> 
                    <img src={img4} className="item" alt="cover pic"></img>
                </div>
                <div>    
                    <img src={img5} className="item" alt="cover pic"></img>
                </div>
                <div> 
                    <img src={img6} className="item" alt="cover pic"></img>
                </div>
            </div>
        </div>
    )
}






export default TVseries