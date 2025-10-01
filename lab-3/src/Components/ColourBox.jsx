import { useState } from "react";
import colours from "../data/data";
import "../App.css";

export default function ColourBox({ colour }) {
    const [curr_colour, setColour] = useState(colour);
    
    const manageClick = () => {
        const rand_colour = colours[Math.floor(Math.random() * colours.length)];

        setColour(rand_colour);
    };

    return (
      <div
        className="ColourBox"
        onClick={manageClick}
        style={{ backgroundColor: curr_colour }}
      ></div>
    );
}
