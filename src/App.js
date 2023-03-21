import "./styles.css";
import { micra } from "./micra";
import Micron from "./Micron";

const TITLE = "Your Title";
const DESCRIPTION = "Describe your micro-blog here";
const AVATAR_LINK = "";

export default function App() {
  return (
    <div className="App">
      <h1>{TITLE}</h1>
      <div className="description-container">
        <img className="avatar" src={AVATAR_LINK} />
        <p>{DESCRIPTION}</p>
      </div>
      <div className="micra-box">
        {micra.map((micron, i) => (
          <Micron key={i} content={micron.content} date={micron.date} />
        ))}
      </div>
    </div>
  );
}
