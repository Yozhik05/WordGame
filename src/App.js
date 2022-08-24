import "./styles.css";
import { WORDS } from "./constants";
import WordContainer from "./components/WordContainer";

export default function App() {
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  const number = Math.floor(getRandomNumber(0, WORDS.length - 1));

  return (
    <>
      <div className="App">
        <WordContainer word={WORDS[number]} />
      </div>
    </>
  );
}
