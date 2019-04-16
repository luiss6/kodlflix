import React from "react";
import Xfiles from "./Series/Xfiles.jpg";
import Homeland from "./Series/Homeland.jpg";
import MrRobot from "./Series/MrRobot.jpg";
import TheOffice from "./Series/TheOffice.jpg";
import Seinfeld from "./Series/Seinfeld.jpg";
import Sherlock from "./Series/Sherlock.jpg";
import SingleTitle from "./SingleTitle";
import { BrowserRouter as Router } from 'react-router-dom';

function Gallery() {
    return (
        <div className="series">
            <div className="box">
                <SingleTitle
                    image={Xfiles}
                    title="Xfiles"
                    id="x-files"
                />
                <SingleTitle
                    image={Homeland}
                    title="Homeland"
                    id="homeland"
                />
                <SingleTitle
                    image={MrRobot}
                    title="MrRobot"
                    id="mr-robot"
                />
            </div>
            <div className="box">
                <SingleTitle
                    image={TheOffice}
                    title="TheOffice"
                    id="the-office"
                />
                <SingleTitle
                    image={Seinfeld}
                    title="Seinfeld"
                    id="seinfeld"
                />
                <SingleTitle
                    image={Sherlock}
                    title="Sherlock"
                    id="sherlock"
                />
            </div>
        </div>
    )
}






export default Gallery;