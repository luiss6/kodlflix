import React from "react";
import img1 from "./Series/img1.jpg";
import img2 from "./Series/img2.jpg";
import img3 from "./Series/img3.jpg";
import img4 from "./Series/img4.jpg";
import img5 from "./Series/img5.jpg";
import img6 from "./Series/img6.jpg";
import SingleTitle from "./SingleTitle";

function Gallery() {
    return (
        <div className="series">
            <div className="box">
                <SingleTitle 
                    image={img1}
                    title="X-files"          
                />
                <SingleTitle 
                    image={img2}
                    title="Homeland"          
                />
                <SingleTitle 
                    image={img3}
                    title="Mr Robot"          
                />
            </div>
            <div className="box">
                <SingleTitle 
                    image={img4}
                    title="The Office"          
                />
                <SingleTitle 
                    image={img5}
                    title="Seinfeld"          
                />
                <SingleTitle 
                    image={img6}
                    title="Sherlock"          
                />
            </div>
        </div>
    )
}






export default Gallery;