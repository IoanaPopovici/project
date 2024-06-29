
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const gameOptions = ['rock', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (player, computer) => {
    if (
      (computer === 'rock' && player === 'scissors') ||
      (computer === 'scissors' && player === 'paper') ||
      (computer === 'paper' && player === 'rock')
    ) {
      setResult('Computer wins!');
      setComputerScore(computerScore + 1);
    } else if (computer === player) {
      setResult('It\'s a tie!');
    } else {
      setResult('Player wins!');
      setPlayerScore(playerScore + 1);
    }

    if (playerScore + 1 === 5 || computerScore + 1 === 5) {
      finishGame();
    }
  };

  const finishGame = () => {
    if (playerScore === 5) {
      alert(`Player - ${playerScore} wins against the computer - ${computerScore}`);
    } else if (computerScore === 5) {
      alert(`Computer - ${computerScore} wins against the player - ${playerScore}`);
    }
    setPlayerScore(0);
    setComputerScore(0);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div className="container full">
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
      <GameButtons onPlayerChoice={handlePlayerChoice} />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

const ScoreBoard = ({ playerScore, computerScore, playerChoice, computerChoice, result }) => (

  <div>
    <div className='title'>
      <h1>Climinte Ioana-Gabriela</h1>
      <h1>Universitatea "Danubius", Galati</h1>
      <h3>Informatica, an II</h3>
      <h3>Aplicatie realizata in cadrul practicii de la Britania Global Markets Limited</h3>

    </div>
  <section className="bg-primary">
    <div className="container">
      <div className="row align-items-start p-5">
        <div className="col">
          <h2 className="text-center">Player <span id="scoreP">{playerScore}</span></h2>
          <div className="container mb-3 mt-3">
            <div className="container"></div>
            <h2 id="playerScore" className="text-center">{playerChoice}</h2>
          </div>
        </div>
        <div className="col">
          <h2 className="text-center">Score</h2>
          <div className="container mb-3 mt-3">
            <div className="container"></div>
            <h2 id="scoreWon" className="text-center bg-warning">{result}</h2>
          </div>
        </div>
        <div className="col">
          <h2 className="text-center">Computer <span id="scoreC">{computerScore}</span></h2>
          <div className="container mb-3 mt-3">
            <div className="container"></div>
            <h2 id="computerScore" className="text-center">{computerChoice}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

);

const GameButtons = ({ onPlayerChoice }) => (
  <section className="bg-warning">
    <div className="container">
      <div id="playerBtns" className="row align-items-start p-5">
        <div className="col p-5 d-flex justify-content-center align-items-end">
          <button className="btn btn-primary p-3 m-2" data-action onClick={() => onPlayerChoice('rock')}>rock</button>
          <button className="btn btn-primary p-3 m-2" data-action onClick={() => onPlayerChoice('paper')}>paper</button>
          <button className="btn btn-primary p-3 m-2" data-action onClick={() => onPlayerChoice('scissors')}>scissors</button>
        </div>
      </div>
    </div>
  </section>
  
);

const ResetButton = ({ onReset }) => (
  <footer className="footer bg-warning">
    <div className="container d-flex justify-content-center">
      <button id="resetBtn" className="btn btn-danger p-3 m-5" onClick={onReset}>
        Reset score
      </button>
    </div>
  </footer>
);

export default App;

