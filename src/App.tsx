import "./App.css";
import LightRays from "./blocks/Backgrounds/LightRays/LightRays";
import Lanyard from "./blocks/Components/Lanyard/Lanyard";
import {
  DESKTOP_LIGHT_RAYS,
  LANYARD_PROPS,
  MOBILE_LIGHT_RAYS,
} from "./lib/consts";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <LightRays {...DESKTOP_LIGHT_RAYS} />
      <LightRays {...MOBILE_LIGHT_RAYS} />
      <Lanyard {...LANYARD_PROPS} />
    </div>
  );
}

export default App;
