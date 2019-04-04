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
            <div className="flex1">
                <img src={img1} ></img>
                <img src={img2} ></img>
                <img src={img3} ></img>
            </div>               
            <div className="flex2">
                <img src={img4} ></img>
                <img src={img5} ></img>
                <img src={img6} ></img>
            </div>
        </div>
    )
}






export default TVseries