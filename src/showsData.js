import Xfiles from "./Series/Xfiles.jpg";
import Homeland from "./Series/Homeland.jpg";
import MrRobot from "./Series/MrRobot.jpg";
import TheOffice from "./Series/TheOffice.jpg";
import Seinfeld from "./Series/Seinfeld.jpg";
import Sherlock from "./Series/Sherlock.jpg";

function showsData () {
    return  [
    {
        image: Xfiles,
        title: "X-files", 
        id: "x-files", 
    },
    
    {
        image: Homeland,
        title: "Homeland",
        id: "homeland",
    },
    
    {
        image: MrRobot, 
        title: "Mr Robot",
        id: "mr-robot",
    },
    
    {
        image: TheOffice, 
        title: "The Office", 
        id: "the-office",
    },
    
    {
        image: Seinfeld, 
        title: "Seinfeld", 
        id: "seinfeld",
    },
    
    {
        image: Sherlock, 
        title: "Sherlock", 
        id: "sherlock",
    }
    ];
}


export default showsData;