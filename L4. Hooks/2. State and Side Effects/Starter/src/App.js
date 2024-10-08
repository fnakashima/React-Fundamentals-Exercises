import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";
import { useState } from "react";

const App = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const onAnswer = (isCorrect) => {
    setNumQuestions(prev => prev + 1);
    if (isCorrect) {
      setNumCorrect(prev => prev + 1);
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <Game onAnswer={onAnswer}/>
      <Score numCorrect={numCorrect} numQuestions={numQuestions} />
    </div>
  );
};

export default App;
