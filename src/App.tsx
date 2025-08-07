import "./App.css";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";
import Lanyard from "./blocks/Components/Lanyard/Lanyard";
import { LANYARD_PROPS, LETTER_GLITCH_PROPS } from "./lib/consts";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <LetterGlitch {...LETTER_GLITCH_PROPS} />
      <Lanyard {...LANYARD_PROPS} />
    </div>
  );
}

export default App;
