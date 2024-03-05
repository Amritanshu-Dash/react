import SocialProfiles from "./myComponents/socialProfiles";
import TechStack from "./myComponents/techStack";
import { RiStackFill } from "react-icons/ri";
import './App.css';

function App() {
  return (
    
    <div className="arrange">

      <h1>Amritanshu Dash</h1>
      <SocialProfiles />

      <p>
        Hey hey, I'm Amritanshu Dash, a fresh face in the software scene, rocking my final year of college!
        <br />
        Don't let the 'newbie' title fool you—I've got the passion and drive to rival the pros!
      </p>

      <h1>My Tech Stack <RiStackFill /></h1>
      <TechStack />

    </div>
  );
}

export default App; 