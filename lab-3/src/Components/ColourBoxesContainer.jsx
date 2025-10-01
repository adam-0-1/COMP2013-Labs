import ColourBox from "./ColourBox";
import "../App.css";

export default function ColourBoxesContainer({ colours }) {
    return (
      <div className="ColourBoxesContainer">
        {colours.map(() => (
            <ColourBox
                colour={colours[Math.floor(Math.random() * colours.length)]}
            />
        ))}
      </div>
    );
}