import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Game = ({onAnswer}) => {
    const [question, setQuestion] = useState({
      value1: 0,
      value2: 0,
      value3: 0,
      proposedAnswer: 0
    });
  
    const generateNewQuestion = () => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const correctAnswer = value1 + value2 + value3;
      const proposedAnswer = Math.floor(Math.random() * 3) + correctAnswer;
      setQuestion({
        value1,
        value2,
        value3,
        proposedAnswer
      });
    };
  
    const checkAnswer = (userAnswer) => {
        const isCorrect = userAnswer === "correct";
        const correnctAnswer = question.value1 + question.value2 + question.value3;
        const answer = question.proposedAnswer === correnctAnswer;
        return isCorrect === answer;
    };

    const handleAnswer = (e) => {
        const isCorrect = checkAnswer(e.target.name);
    
        onAnswer(isCorrect);
        generateNewQuestion();
    };

    useEffect(() => {
        generateNewQuestion();
    }, []);

    return (
        <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${question.value1} + ${question.value2} + ${question.value3} = ${question.proposedAnswer}`}</p>
        </div>
        <button name="correct" onClick={handleAnswer}>True</button>
        <button name="wrong" onClick={handleAnswer}>False</button>
      </div>
    );
}

Game.propTypes ={
    onAnswer: PropTypes.func.isRequired
}

export default Game;