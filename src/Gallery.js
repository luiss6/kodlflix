import React from "react";
import "./App.css"
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
        <div className="box">
            <SingleTitle image={Xfiles} title="X-files" id="x-files" />
            <SingleTitle image={Homeland} title="Homeland" id="homeland" />
            <SingleTitle image={MrRobot} title="Mr Robot" id="mr-robot" />
            <SingleTitle image={TheOffice} title="The Office" id="the-office" />
            <SingleTitle image={Seinfeld} title="Seinfeld" id="seinfeld" />
            <SingleTitle image={Sherlock} title="Sherlock" id="sherlock" />
        </div>
    )
}






export default Gallery;