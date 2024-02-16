import React, { useState } from "react";
const Quizzical = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the primary goal of sustainable development?",
      options: [
        { id: 0, text: "Economic growth", isCorrect: false },
        { id: 1, text: "Environmental conservation", isCorrect: false },
        { id: 2, text: "Social equality", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "Which of the following is a pillar of sustainable development?",
      options: [
        { id: 0, text: "Profit maximization", isCorrect: false },
        { id: 1, text: "Social equity", isCorrect: true },
        { id: 2, text: "Resource depletion", isCorrect: false },
        { id: 3, text: "Technological obsolescence", isCorrect: false },
      ],
    },
    {
      text: "Which renewable energy source is considered environmentally friendly?",
      options: [
        { id: 0, text: "Coal", isCorrect: false },
        { id: 1, text: "Natural gas", isCorrect: false },
        { id: 2, text: "Solar power", isCorrect: true },
        { id: 3, text: "Nuclear energy", isCorrect: false },
      ],
    },
    {
      text: "What does the term 'Triple Bottom Line' refer to in sustainable development?",
      options: [
        { id: 0, text: "Three financial statements", isCorrect: false },
        {
          id: 1,
          text: "Balancing economic, social, and environmental outcomes",
          isCorrect: true,
        },
        { id: 2, text: "Three-tiered management structure", isCorrect: false },
        { id: 3, text: "Triple taxation", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the United Nations Sustainable Development Goals (SDGs)",
      options: [
        { id: 0, text: "Promote economic inequality", isCorrect: false },
        { id: 1, text: "Address climate change", isCorrect: true },
        { id: 2, text: "Encourage overconsumption", isCorrect: true },
        { id: 3, text: "Support military interventions", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="quizzical" id="quiz">
      <div className="quizimg">
        <h1 className="qh1">Test Your</h1>
        <h1 className="qh2">Sustainibility</h1>
        <h1 className="qh3"> POP QUIZ !</h1>
      </div>
      <div className="thequiz">
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="question-card">
            <h2>Score: {score}</h2>
            {/* Current Question  */}
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzical;
