import './App.css'
import ColourBoxesContainer from './Components/ColourBoxesContainer'; 
import colours from './data/data'

function App() {
  return (
    <ColourBoxesContainer colours = {colours} />
  );
}

export default App;